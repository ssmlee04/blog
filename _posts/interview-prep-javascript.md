---
layout: article
title: Javascript related questions
---
# {{ page.title }}


### Explain how `this` works in JavaScript

`this` evaluates to the value of the current execution context.

### What is `bind` in Javascript 

You use `bind` function to preserve the context.

### What is `apply` in Javascript 

You use `apply` function to preserve the context.

### Difference between ES5, ES6

ES6 has some new features or syntaxs that are good for performances or code reability. ES6 also supports classes and it's more intuitive work on in some cases. All the browsers support ES5 syntaxes but with ES6 you would need to transpile your code so that your browser is able to read it. 

pros: 
- arrow function
- classes
- generators
- template literals
- spread operator
- `let` and `const`

cons: 
- polyfills are slow
- lack of browser support

### What is ES6 block scoping

Declaring a variable with `var` could cause confusion sometimes. It's easy for developers to unintentionally create bugs or pollute the global namespace when doing variable declarations with hoisting. Instead in ES6 a `let` statement is created and provides a block scoping mechanism to declare local variables without causing issues. 

### What is strict mode or "use strict"

Using strict mode enforces stricter error handling when running your code. It essentially raises errors that would have otherwise failed silently. Using strict mode can help you avoid simple mistakes like creating accidental globals, undefined values, or duplicate property names.

### What is an error-first callback?

Error-first callbacks are used to pass errors and data. The first argument is always an error object that the programmer has to check if something went wrong. If there's no errors then the error object could be null or undefined. Additional arguments are used to pass data.

### What is a closure

A closure is an inner function that has access to the outer function's variables. It is often used in JavaScript for object data privacy, in event handlers and callback functions, and in partial applications, currying, and other functional programming patterns.

### How to create a Cookie using JavaScript?

The simplest way to create a cookie is to assign a string value to the `document.cookie` object

### Explain event delegation

Event delegation refers to the process of using event propagation (bubbling) to handle events at a higher level in the DOM than the element on which the event originated. It allows us to attach a single event listener for elements that exist now or in the future. 

### Explain how prototypal inheritance works

### What’s the Difference Between Class & Prototypal Inheritance?

Prototypal Inheritance: A prototype is a working object instance. Objects inherit directly from other objects.

Class Inheritance: A class is like a blueprint — a description of the object to be created.

Objects are everything in prototype languages, which include adding, re-defining, overriding and removing functions/methods at runtime.

### What do you think of AMD vs CommonJS?

### Relation between CommonJS, AMD and RequireJS?

CommonJS is a way of defining modules with the help of an `exports` object, that defines the module contents. Simply put, a CommonJS implementation might work like this:

```
exports.add = function(a, b) {
  return a + b;
}
```

Browserify will now let you use CommonJS in the browser

RequireJS implements AMD, which is designed to suit the browser environment

AMD is more suited for the browser, because it supports asynchronous loading of module dependencies.

CommonJS, is a standard, mostly used in servers and it loads modules synchronously. 

### What is a native object

object in an ECMAScript implementation whose semantics are fully defined by this specification rather than by the host environment.

### When would you use document.write()?

document.write() shouldn’t be used after the page has loaded to change the content as it will overwrite the entire page (probably not what you wanted to happen...).

### What is AJAX?

Simply put, AJAX is the use of JavaScript to send and receive using HTTP without reloading the page. 

- A user interaction in the browser triggers the event, such as a button click
- The AJAX call fires. This creates and AJAX request, browsers use the XMLHttpRequest object. When the server responds to the browser’s request, the same XMLHttpRequest object will process the result.
- The server-side script receives the input from JavaScript, and processes the data.
- After the data is processed, the script sends the data back to the original client-side page that made the request via XML
- Once the data is received, a second JavaScript callback function, is called this function captures the data, and updates the web page accordingly.

### What is JSONP all about?

It's a way of dealing with cross-site requests. Normally you cannot run a script from domains other than the domain from which the resources were served. And with JSONP you can pass a function as the parameter so that the script can execute the function you want it to execute even if it's cross-domain. 

### What is a Promise
 
A promise is an object that may produce a result some time in the future. The result could be resolved or either rejected. 

### What is hoisting

Hoisting is when a JS declaration is lifted (“hoisted”) to the top of it’s scope

### What is the difference between == and ===?

The identity (===) operator behaves identically to the equality (==) operator except no type conversion is done, and the types must be the same to be considered equal.

### Explain what a single page app is and how to make one SEO-friendly.

### What is browser polyfills

A polyfill, or polyfiller, is a piece of code (or plugin) that provides the technology that you, the developer, expect the browser to provide natively.

### Explain the differences on the usage of foo between function foo() {} and var foo = function() {}

The difference is that functionOne is a function expression and so only defined when that line is reached, whereas functionTwo is a function declaration and is defined as soon as its surrounding function or script is executed (due to hoisting).

### What tools would you use to find a performance bug in your code?

heapdump, logging, timer

### What's the event loop

The Event Loop is a queue that stores a list of functions and the callback function. When an async function executes, the callback function is pushed into the queue. The JavaScript engine doesn't start processing the event loop until the code after an async function has executed.

### What is a blocking code?

We say a code is blocking if the application needs to complete executing the code before moving on to the next code black.  

### What is event-driven programming

the flow of the program is determined by events such as user actions (mouse clicks, key presses), sensor outputs, or messages from other programs/threads

In an event-driven application, there is generally a main loop that listens for events, and then triggers a callback function when one of those events is detected. In embedded systems the same may be achieved using hardware interrupts instead of a constantly running main loop. Event-driven programs can be written in any programming language, although the task is easier in languages that provide high-level abstractions, such as closures.


### how do you send binary data over HTTP


### Explain babel to me

Babel is a JavaScript transpiler that converts edge JavaScript into plain old ES5 JavaScript that can run in any browser. It makes available many syntactic sugars such as arrow functions or classes so that you can code more naturally.

### Explain express.js to me

It is a web application framework to help organize your web application into an MVC architecture on the server side

### What do you use a websocket




### Difference b/w Concurrency and parallelism

Concurrency means, essentially, that task A and task B both need to happen independently of each other, and A starts running, and then B starts before A is finished.


Concurrent programming regards operations that appear to overlap and is primarily concerned with the complexity that arises due to non-deterministic control flow. The quantitative costs associated with concurrent programs are typically both throughput and latency. Concurrent programs are often IO bound but not always, e.g. concurrent garbage collectors are entirely on-CPU. The pedagogical example of a concurrent program is a web crawler. This program initiates requests for web pages and accepts the responses concurrently as the results of the downloads become available, accumulating a set of pages that have already been visited. Control flow is non-deterministic because the responses are not necessarily received in the same order each time the program is run. This characteristic can make it very hard to debug concurrent programs. Some applications are fundamentally concurrent, e.g. web servers must handle client connections concurrently. Erlang is perhaps the most promising upcoming language for highly concurrent programming.

Parallel programming concerns operations that are overlapped for the specific goal of improving throughput. The difficulties of concurrent programming are evaded by making control flow deterministic. Typically, programs spawn sets of child tasks that run in parallel and the parent task only continues once every subtask has finished. This makes parallel programs much easier to debug. The hard part of parallel programming is performance optimization with respect to issues such as granularity and communication. The latter is still an issue in the context of multicores because there is a considerable cost associated with transferring data from one cache to another. Dense matrix-matrix multiply is a pedagogical example of parallel programming and it can be solved efficiently by using Straasen's divide-and-conquer algorithm and attacking the sub-problems in parallel. Cilk is perhaps the most promising language for high-performance parallel programming on shared-memory computers (including multicores).



### How does Node.js work asynchronously without multithreading?

The main event loop is single-threaded by nature. But most of the i/o (network, disk, etc) is run on separate threads, because the i/o APIs in Node.js are asynchronous/non-blocking by design, in order to accommodate the event loop.

### When does Node.js work the best

Heavy IO applications benefit well from this, whereas CPU intensive applications will not.



### What is the difference between == and ===

The identity (===) operator behaves identically to the equality (==) operator except no type conversion is done, and the types must be the same to be considered equal.

1 + true = 2
0 == '0' // true, converted to string type
'' == '0'           // false,
false == '0'        // true, converted to integer type
false == undefined  // false
false == null       // false
null == undefined   // true
' \t\r\n ' == 0     // true


### How does http send data

TLS handshake it will send packets over the channel





