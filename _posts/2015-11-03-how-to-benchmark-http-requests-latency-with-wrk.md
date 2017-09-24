---
layout: article
title: Benchmark HTTP requests with wrk
---
## {{ page.title }}

### Abstract

wrk is an open-source tool that benchmarks the latency of http requests of your service. It generates a huge amount of HTTP requests and send the requests to the server for you.

You can benchmark the HTTP GET, POST, PUT or DELETE requests using this. The common input arguments are

    -c, --connections <N>  Connections to keep open
    -d, --duration    <T>  Duration of test
    -t, --threads     <N>  Number of threads to use
    -s, --script      <S>  Load Lua script file
    Numeric arguments may include a SI unit (1k, 1M, 1G)

A typical wrk command is like this

```
$ wrk -d 1s -t 1 -c 400 --timeout 5s http://localhost:3000/apis/users
```

A typical wrk output is like this

```
Running 1s test @ http://localhost:3000/apis/users
  1 threads and 400 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   350.72ms   76.15ms 531.58ms   75.69%
    Req/Sec   663.67    291.11   840.00     83.33%
  432 requests in 1.01s, 122.77KB read
  Non-2xx or 3xx responses: 432
Requests/sec:    428.02
Transfer/sec:    121.64KB
```

### Dealing with POST and PUT requests

You need to write a lua script and put the request body or header inside the script. A sample command looks like this:

```
wrk -c 100 -t 4 -d 30s -s post.lua http://localhost:3000
```

[https://github.com/timotta/wrk-scripts](https://github.com/timotta/wrk-scripts)

#### application/x-www-form-urlencoded

```
-- example HTTP POST, PUT, DELETE script which demonstrates setting the
-- HTTP method, body, and adding a header

wrk.method = "POST"
wrk.body   = "email=xxx&password=xxx"
wrk.headers["Content-Type"] = "application/x-www-form-urlencoded"
```

And then you can do: 

```
wrk -c1 -t1 -d5s -s post.lua http://localhost:3000/apis/v1/auth/login
```

#### JSON

```
-- example HTTP POST, PUT, DELETE script which demonstrates setting the
-- HTTP method, body, and adding a header

wrk.method = "POST" 
wrk.body = '{"password":"xxx","email":"xxx"}' 
wrk.headers["Content-Type"] = "application/json"
```

And then you can do: 

```
wrk -c1 -t1 -d5s -s post.lua http://localhost:3000/apis/v1/auth/login
```

![http://i.stack.imgur.com/0toQk.png](http://i.stack.imgur.com/0toQk.png)

--

references:

* [Sample Lua scripts](https://github.com/wg/wrk/tree/master/scripts)
* [WRK the HTTP benchmarking tool - Advanced Example](http://czerasz.com/2015/07/19/wrk-http-benchmarking-tool-example/)

{{ page.date | date_to_string }}



