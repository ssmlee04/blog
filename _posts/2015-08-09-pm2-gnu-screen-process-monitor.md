---
layout: default
title: Use pm2 and GNU screen to monitor processes in one session
---
## {{ page.title }}

#### Abstract

There are at times your service will be facing problems and you need to dig into the problems somehow. So it's very important to log the events so later you can track what is happening. You can record the logs in separate files using modules like winston or even simplier you can `console.log` the error messages and use pm2 to read logs in realtime and monitor memory and cpu processes. It also visualizes the cpu and memory usages for you easily in case it's in production mode or if you're just stress testing you server.

#### pm2

Sometimes it's ok to run the processes in the background. And sometimes it's not.  What if you want to run 3 processes and through ssh at the same time?  The traditional way to do it is open 3 terminals and ssh to the same ip, start 3 processes separately.  But when you get disconnected to the internet and then all those processes would be terminated. 

`pm2` is a way to keep those processes alive and at the same time for you to easier monitor those processes. I usually combine `pm2` with `screen` so you can switch the screen easily using GNU `screen`.

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

--

references:

* [https://www.digitalocean.com/community/tutorials/how-to-use-pm2-to-setup-a-node-js-production-environment-on-an-ubuntu-vps](https://www.digitalocean.com/community/tutorials/how-to-use-pm2-to-setup-a-node-js-production-environment-on-an-ubuntu-vps)
* [https://github.com/Unitech/pm2](https://github.com/Unitech/pm2)

{{ page.date | date_to_string }}





