---
layout: article
title: Elixir and Erlang basics
---
# {{ page.title }}

### Summary

float: 64-bit double precision and support e for exponent values:
atoms: whos name is a value
There are three additional operators whose first argument must be a boolean (true or false):

```
iex> true and 42
42
iex> false or true
true
iex> not false
true
iex> 42 and true
** (ArgumentError) argument error: 42
iex> not 42
** (ArgumentError) argument error
```

Actor model:


![add a image in markdown](http://substack.net/images/github.png)

--

references:

* [add a link in markdown](https://clearstreet.io)

{{ page.date | date_to_string }}
