---
layout: article
title: 😱 CPU Utilization is Wrong?
---
# {{ page.title }}

Some articles I saw on the internet.

[http://www.brendangregg.com/blog/2017-05-09/cpu-utilization-is-wrong.html](http://www.brendangregg.com/blog/2017-05-09/cpu-utilization-is-wrong.html)

![](https://i.stack.imgur.com/RB6Qm.png)

According to the article a lot of times your CPU is stalled for reasons like waiting for memory I/O just you don't know. Also `instructions per cycle` is a more useful metric to benchmark how your CPU is actually working.

--

references:

{{ page.date | date_to_string }}
