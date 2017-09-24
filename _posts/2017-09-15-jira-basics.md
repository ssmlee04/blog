---
layout: article
title: Jira basics
---
# {{ page.title }}

## Abstract

ab is a tool to benchmark your HTTP server capability. It tells you how many HTTP requests your server can handle per second.


```
ab -n 10000 -c 100 http://127.0.0.1:8080/
```

ab is by default installed on your mac. But on a Mac ab would freeze at some numbers when doing load testing. The reason is Mac is running out of sockets and the socket cannot be reused for another 15 seconds. 

Once you pass -k flag (Use HTTP KeepAlive feature) the problem would go away.

```
ab -k -n 10000 -c 100 http://127.0.0.1:8080/
```


--

references:

* [add a link in markdown](https://clearstreet.io)

{{ page.date | date_to_string }}
