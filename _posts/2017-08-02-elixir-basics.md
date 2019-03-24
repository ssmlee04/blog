---
layout: article
title: 😀 Elixir basics
---
# {{ page.title }}

![](http://brunakochi.com/images/elixir-vertical.png)

### Summary

Elixir is a functional programming language to develop high-concurrency, highly-scalable and fault tolerant applications. It also ships with iex (the Elixir interactive shell) and mix (a set of tools to creaet / compile / test your applications) so that you can get your hands on your applications pretty quickly.

Elixir run Erlang VM (BEAM) and Erlang's original use case was to program Ericsson’s telephone switches. You can imagine a telephone system is highly concurrent, never down for maintenance, requires low latency and has low hardware requirements. And Erlang provides a solution for the scenario.

### OTP

OTP (Open Telecom Platform) is a set of libraries that ships with Erlang. It's basically a development environment for developing highly-concurrent, fault-tolerant appications. Those applications are designed to run very simple tasks but very efficiently.

### Basics:

```
iex> 0 || nil
0 # this is kind of a pitfall
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

You can write tests directly from the documentation. Yay~

### GenServers:

### Supervisors:

Supervisors should be extremely lightweight with low risk of having their own bugs, because their job is to restart other processes.

### ETS:

Data is organized as a set of dynamic tables, which can store tuples. Each table is created by a process. When the process terminates, the table is automatically destroyed. Every table has access rights set at creation.

Tables are divided into four different types, set, ordered_set, bag and duplicate_bag. A set or ordered_set table can only have one object associated with each key. A bag or duplicate_bag can have many objects associated with each key.

The number of tables stored at one Erlang node is limited. The current default limit is approximately 1400 tables.

### Mnesia

### Processes:

An elixir process is not like a unix process.

Processes are isolated from each other, run concurrent to one another and communicate via message passing. Processes in Elixir are extremely lightweight in terms of memory and CPU (unlike threads in many other programming languages). Because of this, it is not uncommon to have tens or even hundreds of thousands of processes running simultaneously.

In fact, the Erlang VM supports up to 134 million (!) processes.

### Dialyzer:

### Misc:

- On matching you can match x :: binary with unknown size
- The pin operator ^ is used on the left side

--

references:

* [Elixir School](https://elixirschool.com/en/lessons/basics/enum/)
* [Elixir cheatsheet](https://elixir-examples.github.io/)
* [Connecting Elixir nodes on the same LAN](http://benjamintan.io/blog/2014/05/25/connecting-elixir-nodes-on-the-same-lan/)
{{ page.date | date_to_string }}
