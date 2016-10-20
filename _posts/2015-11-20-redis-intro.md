---
layout: default
title: Redis intro
---
## {{ page.title }}

### Abstract

Redis is a in-memory key-value pair cache storage that give you really fast read/writes.  Many people use it to store login sessions.

![http://i.stack.imgur.com/nwkWT.png](http://i.stack.imgur.com/nwkWT.png)

### Installation

```
sudo apt-get install redis-server
```

### Basic commands

```
$ redis-server
$ redis-server --port 1234
$ redis-server /etc/redis/redis.conf
```
Start the redis server with redis.conf. Most likely you are changing ports away from 6379 or setting up a login password in the conf.


```
$ redis-cli
$ redis-cli -a password
```
use redis-cli to test connection

### Misc

The default running port for redis is 6379.  When you deploy redis you need to make sure you do the following things:

* bind redis to localhost
* firewall close 6379
* setup password for redis
* don't run redis with root permission

Because read/write is so fast for redis that hackers can brush force guess 150,000 password per second to crack your redis.  Because of some redis design properties hackers can hack redis and gain root access to your machine.

--

references:

* [http://antirez.com/news/96](http://antirez.com/news/96)
* [https://stackoverflow.com](https://stackoverflow.com)

{{ page.date | date_to_string }}





