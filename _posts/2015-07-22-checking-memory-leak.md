---
layout: default
title: Checking memory leaks in node.js applications
---
## {{ page.title }}

### Checking Memory leaks:

When your application gets larger it will be more difficult to monitor the memory leaks.  Luckily we have a lot of tools to assist us finding the cause of the memory leaks.

### Things that I (try to) do

* Chrome dev tools to monitor client side memory usage
* server side Heapdump using node-heapdump module to take memory snapshots

### Test your memory leak on the client side

first write a simple script that causes memory leak as follows

```js
<script>
  var array = []
  var leak = function(){
      if (!array || !array.length) array = new Array(10000);
      else array = new Array(10000 + array.length);
  }
  var release = function(){
      array = null;
  }
</script>
<button onclick='leak()'>leak</button>
<button onclick='release()'>release</button>
```

As you click on the `leak` button you will see `array` gets larger and larger.  It takes up a lot of memory but you're not actually using anything with it.  You can record this memory allocation by doing

Chrome dev tools -> Profiles -> Record heap allocations -> Start

When you cilck on the leak button you will see some blue bars and gray bars on the screen.  The blue bars are memories in use and the gray bars are released memory.  It's apparent the array is getting larger and the blue bar is getting larger too.

![](https://clearstr.s3.amazonaws.com/images%2FoBG%2FKEh%2FpHp%2FT3WZTe4X2bgxZp-.png)

once you click on the release button.  The memory will be released and the blue bar will disappear.  That means youh have release the unused memory... yay.

Also you can take heap snapshots and compare the memory allocation between 2 snapshots and possibly locate the cause of the memory leak.

![](https://clearstr.s3.amazonaws.com/images%2F-Qb%2FjPw%2F_Yo%2FECSKdoFtdv21vCQ.png)

Use the flame chart to check your profile your CPU usage.

Basically what you do is look for large spikes in the chart.  It means the function call is taking so much CPU time to execute and unusual things might happen there.

When you hover your cursor on the chart you will see the function name and some attributes.  `Total time` is this function execution time in this initialization.  `Aggregated total time` is the total time this function is executed in the lifecycle of the recording.

![](https://developer.chrome.com/devtools/docs/cpu-profiling-files/flamechart-outliers.png)


### Test your memory leak on the server side

we can use the `node-heapdump` module to monitor the memory usage of the node.js application.  You can open the recorded file using Chrome dev tools similar to the steps described above.

    var heapdump = require('heapdump')
    ...
    heapdump.writeSnapshot()

and then you can open chrome dev tools to load this profile.

![](https://clearstr.s3.amazonaws.com/images%2FagU%2F7DZ%2FujV%2F07wcOGdMx77HThH.png)

Some knowledges about the heap dump profile

![](https://s3.amazonaws.com/clearstreet/misc/h9811gf89g8f3.png)

in situations you will see some highlighted nodes. Some of them in yellow and some of them in red. Yellow nodes are DOM nodes that are referenced to the source code and red nodes are not.  And the size it will free up when you destroy the entire node is called 'retained size'.



### Common errors

* Error: spawn ENOENT
* FATAL ERROR: JS Allocation failed - process out of memory

--

references:

* [https://github.com/bnoordhuis/node-heapdump](https://github.com/bnoordhuis/node-heapdump)
* [https://strongloop.com/strongblog/node-js-performance-tip-of-the-week-memory-leak-diagnosis/](https://strongloop.com/strongblog/node-js-performance-tip-of-the-week-memory-leak-diagnosis/)
* [https://strongloop.com/strongblog/how-to-heap-snapshots/](https://strongloop.com/strongblog/how-to-heap-snapshots/)
* [http://addyosmani.com/blog/taming-the-unicorn-easing-javascript-memory-profiling-in-devtools/](http://addyosmani.com/blog/taming-the-unicorn-easing-javascript-memory-profiling-in-devtools/)
* [https://developer.chrome.com/devtools/docs/cpu-profiling](https://developer.chrome.com/devtools/docs/cpu-profiling)

{{ page.date | date_to_string }}





