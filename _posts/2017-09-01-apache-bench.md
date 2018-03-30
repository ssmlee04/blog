---
layout: article
title: 😀 Use Apache Bench to benchmark your HTTP requests
---
# {{ page.title }}

## Abstract

`ab` is a tool to benchmark your HTTP server capability. It tells you how many HTTP requests your server can handle per second as well as providing you some useful benchmarking metrics.

```
ab -n 10000 -c 100 http://127.0.0.1:8080/
```

`ab` is by default installed on your mac. But on a Mac it would freeze at some numbers when doing load testing. The reason is Mac is running out of sockets and the socket cannot be reused for another 15 seconds.

Once you pass `-k` flag (HTTP Keep-Alive header) the problem would go away.

```
ab -k -n 10000 -c 100 http://127.0.0.1:8080/
```

An output looks like this:

![](https://i.stack.imgur.com/5qJOl.png)

--

references:

* [How To Use ApacheBench To Do Load Testing on an Ubuntu 13.10 VPS](https://www.digitalocean.com/community/tutorials/how-to-use-apachebench-to-do-load-testing-on-an-ubuntu-13-10-vps)

{{ page.date | date_to_string }}
