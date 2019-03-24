---
layout: article
title: Connect Erlang Nodes
---
# {{ page.title }}

So it appears that when you start a node Erlang VM would inject a cookie from your home directory.

```
% cat ~/.erlang.cookie
XBYWEVWSNBAROAXWPTZX%
```

So to connect two nodes you have to explicitly give it a cookie so that others can connect to it correctly.

--

references:

- [http://benjamintan.io/blog/2014/05/25/connecting-elixir-nodes-on-the-same-lan/](http://benjamintan.io/blog/2014/05/25/connecting-elixir-nodes-on-the-same-lan/)

{{ page.date | date_to_string }}
