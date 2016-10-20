---
layout: article
title: Some linux commands that I use often
---
## {{ page.title }}

### Abstract

When you deploy your service on the cloud you frequently need to `ssh` in the instance and check something on the server.  Most likely you will have to check some logs, monitor cpu and memory usages.

### Thing I do often

```
$ free -m
```
Check the available memory on your machine


```
$ ps aux --sort -rss | head
```
Display processes with top 10 memory usage (not working on a Mac)


```
$ df -h
```
check the avilable disk space


```
$ last
```
check last ssh-in user


```bash
$ tail xxx.txt -n 20
```
read the last 20 lines of xxx.txt, you can also ignore the -n part

```bash
$ whoami
```
this tell you who you are.

```bash
$ ll
```
check file permissions. detailed explaination can check this link [http://mason.gmu.edu/~montecin/UNIXpermiss.htm](http://mason.gmu.edu/~montecin/UNIXpermiss.htm)

```bash
$ sudo -u username xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```
you can run processes using different username

```
$ lsof -t -i :8000 | xargs ps -fp
```
checking what program is listening port 8000


```
tail -f /proc/1234/fd/1
```
Check the outputs of a running process with pid `1234` (not working on a mac)

### utilities that I use

* ncdu (use this to check disk space and usage)

![](http://i.stack.imgur.com/JrU5k.png)

* screen (use this to open multiple screens and run processes in them)

![](http://i.stack.imgur.com/ciJfb.png)

--

references:

* [http://mason.gmu.edu/~montecin/UNIXpermiss.htm](http://mason.gmu.edu/~montecin/UNIXpermiss.htm)
* [https://stackoverflow.com](https://stackoverflow.com)

{{ page.date | date_to_string }}





