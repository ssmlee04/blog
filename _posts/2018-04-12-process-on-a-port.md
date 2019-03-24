---
layout: article
title: 😀 Find a process listening on a port (Mac)
---
# {{ page.title }}

On a mac you can do the following to find out what is blocking your port:

```sh
lsof -i :3000
```

You will get a list of `PID`s. And then you do

```sh
kill -9 xxx
```

to kill the process with `PID` `xxx`.

--

references:

{{ page.date | date_to_string }}
