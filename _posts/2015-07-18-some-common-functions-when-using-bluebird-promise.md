---
layout: default
title: Some common things I do with Bluebird promises
---
## {{ page.title }}

### Callbacks

Originally people do async stuff using callbacks, which means that you call a function and the function might not return anything to you before the script moves on to other function calls.  For example db read/writes or file io are very slow.  In this case we can send in a `callback function` as params and this function can interact with the results generated later (maybe a few `ms` later) in time.  

```js
fs.readFile('A.txt', function(err, d1){ // ... 1
  if (err1) {
    // do something
  }
  fs.readFile(d1 + '.txt', function(err, d2){ // ... 2
    if (err2) {
      // do something
    }
    fs.readFile(d2 + '.xls', function(err, d3){ // ... 3
      if (err3) {
        // do something
      }
      // finally do something
    });
  });
})
```

The idea is to read A.txt, then use information from A.txt to read B.txt, and then C.xls and finally do something. 

this looks really messy after a while.  Also the error handing here is minimal.  You know where the error occurs and you can decide what to do with errors.  But if you want to do something more complicated like

if `err3` then redo `2`, if `err2` redo `1`, if `err3` ten times than do something else.

It would not be easy. So we do this with promises.

### Promises

Promises are great in that it lets you write code in a very clean way. You can also do the error handling in a way that other people can read.  The above code can basically be written as follows:

```js
var Promise = require('bluebird'); // official documentation use Promise (capital letter. so don't change it)
var fs = Promise.promisifyAll(require("fs"));

fs.readFile('A.txt') --- (1)
.then(function(d){
  return fs.readFile(d + '.txt'); --- (2)
}).then(function(d){
  return fs.readFile(d + '.xls'); --- (3)
}).catch(function(err){
  // do something with the error, the error could come from code block 1 or 2 or 3
});
```

to do the error handing described above you can (maybe) do something like this:

```js
var count = 0;
var a, b, c;

var A = fs.readFileAsync('A.txt')
var B = function(d){
  a = d.toString();
  return fs.readFileAsync(d.toString() + ".txt");
}
var C = function(d){
  b = d.toString();
  return fs.readFileAsync(d.toString() + ".xls");
}
var D = function(err){
  count += 1;
  if (count > 100) {
    return Promise.reject('failed to load this stuff')
  } else if (err1) {
    return ABCD();
  } else if (err2) {
    return BCD(b);
  } else if (err) {
    return CD(c);
  } else {
    console.log('there is a weird error somehow...')
  }
}
var ABCD = function(){
  return A.then(B).then(C).catch(D);
}
var BCD = function(d){
  return Promise.resolve(d + ".txt").then(B).then(C).catch(D);
}
var CD = function(d){
  return Promise.resolve(d + ".xls").then(C).catch(D);
}
```

And the code becomes

```
A
.then(B)
.then(C)
.catch(D);
``` 

or 

```
ABCD()
```

This is a sudo code. you need to sort out the technicalities by your self.

### Common functions in Bluebird.js that I use

* `bind()`

It's basically similar to Javascript `.bind()` where you can bind a context to become `this`

* `resolve()`
* `reject()`

Basically I convert all objects to a `promifified` object to ensure consistency. So the resolve is an resolved or rejected promise.

* `settle()`

When you deal with multiple promises some of them might fail but you want your promise chains to continue to execute without throwing errors and stopping the loop.

* `map()`
* `reduce()`

It's pretty much just like Javascript `Array.prototype.map()` except it's dealing with an array of promises.  For map() you can also send in `concurrency` as optional params.

* `Promise.promisifyAll()`
* `Promise.promisify()`
* `Promise.cast()`

important when you want to cast other types of promises to a bluebird promise. Basically when I do promises I cast all kind of promises (such as mongoose promise) to a bluebird promise to ensure there's no race conditions. This is deprecated to Promise.resolve I think.

* `spread()`

I also use this to reduce the code.

in situations we have blocks of code like this

```
var aaa = function(){
  return [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)]
}
var bbb = function(a, b, c){
  // do something
}
```

and then you can simplify the following code

```
aaa()
.then(function(d){
  return bbb(d[0], d[1], d[2])
})
```

to

```
aaa()
.spread(bbb)
```

maybe some people find this useful I don't know.

### Miscellaneous

* I think `Promise.map` method can have maximum concurrency of 5. If there are more than 5 promises that is being executed but not yet resolved or rejected the `.map` method would be jammed. So many times I just set 

```
{concurrency: 1}
```

when I am using `Promise.map` method.

--

references:

* [https://github.com/petkaantonov/bluebird/blob/master/API.md](https://github.com/petkaantonov/bluebird/blob/master/API.md)

{{ page.date | date_to_string }}





