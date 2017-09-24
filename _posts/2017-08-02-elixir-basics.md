---
layout: article
title: Elixir basics
---
# {{ page.title }}

![](http://brunakochi.com/images/elixir-vertical.png)

### Summary

Elixir is a functional programming language to develop high-concurrency, highly-scalable and fault tolerant applications. It also ships with iex (the Elixir interactive shell) and mix (a set of tools to creaet your applications) so that you can get your hands on your applications pretty quickly. 

Elixir run Erlang VM (BEAM) and Erlang's original use case was to program Ericsson’s telephone switches. You can imagine a telephone system is highly concurrent, never down for maintenance, requires low latency and has low hardware requirements. And  Erlang provides a solution for the scenarios. 

### Basics:

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

Some strict comparison behaviors

```
iex> 2 == 2.0
true
iex> 2 === 2.0
false
```

An important feature of Elixir is that any two types can be compared.

```
number < atom < reference < function < port < pid < tuple < map < list < bitstring
```

### Testing

Doctests: 

You can write tests directly from the documentation. 

### GenServer: 

### Supervisors:


--

references:

* [Elixir School](https://elixirschool.com/en/lessons/basics/enum/)
* [Elixir cheatsheet](https://elixir-examples.github.io/)

{{ page.date | date_to_string }}
