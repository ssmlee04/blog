---
layout: article
title: 😀 pm2 and GNU screen monitoring
---
## {{ page.title }}

#### Abstract

pm2 is a processing logging and monitoring application. you can use it to monitor memory and cpu usages. It can also be configured to log the outputs to different transports. It's really really cool.

#### pm2

Sometimes it's not ok to run the processes in the background. Let's say you want to run 3 processes through ssh at the same time. The traditional way to do it is open 3 terminals and ssh to the same ip address and start 3 processes separately. But you can also ssh into 1 terminal and run 3 processes in the backend. However, when the process is in the background it becomes hard to know what exactly is going on.

`pm2` is a way to keep those processes alive and at the same time monitor those processes for you.

I tried to combine `pm2` with `screen` so you can switch the screen easily using GNU `screen`.


```bash
$ sudo apt-get -y install pm2 screen
```
and then you can start using those services.


#### Things that I usually do

```bash
$ screen
```

this creates a screen session


inside a screen:

```bash
$ ctrl + a + c
```
this creates a new screen

```bash
$ ctrl + a + n
```
go to next screen

```bash
$ ctrl + a + d
```
detach from this screen

```bash
$ screen -r
or
$ screen -r xxxx
```
re-attach to the previous running screen process with id: xxxx

```bash
$ NODE_ENV=production PORT=8080 DEBUG=isomorphic500 pm2 start index.js
$ NODE_ENV=production pm2 start server.js
```
to start servers in many places

```bash
$ pm2 logs
```
you can monitor console logs real time, aggregated across processes

```bash
$ pm2 monit
```
monitor cpu and memory usage of all minitored processes

```bash
$ pm2 stop xxx
```
stop running pm2 process named xxx

```bash
$ pm2 restart xxx
```
restart running pm2 process named xxx

```bash
$ pm2 monit
```
starts a pm2 monitor

![](https://raw.githubusercontent.com/unitech/pm2/master/pres/pm2-monit.png)

```
$ pm2 start server.js -i 0
```

Start your process on all of your cpu cores. Notice you're not gonna get 8 times request per second if you have 8 cores because of some overheads.

--

references:

* [https://www.digitalocean.com/community/tutorials/how-to-use-pm2-to-setup-a-node-js-production-environment-on-an-ubuntu-vps](https://www.digitalocean.com/community/tutorials/how-to-use-pm2-to-setup-a-node-js-production-environment-on-an-ubuntu-vps)
* [https://github.com/Unitech/pm2](https://github.com/Unitech/pm2)

{{ page.date | date_to_string }}





