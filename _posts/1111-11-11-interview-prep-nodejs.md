---
layout: article
title: Node.js related questions
interview: true
---
# {{ page.title }}

### Explain how garbage collection in V8 works

Why is garbage collection expensive? The V8 JavaScript engine employs a stop-the-world garbage collector mechanism. In practice, it means that the program stops execution while garbage collection is in progress.

### What is an event loop

The event loop is provided by the libuv library. 


### What is the Call Stack and is it part of V8?

The Call Stack is definitely part of V8. It is the data structure that V8 uses to keep track of function invocations. Every time we invoke a function, V8 places a reference to that function on the call stack and it keeps doing so for each nested invocation of other functions. This also includes functions that call themselves recursively.
