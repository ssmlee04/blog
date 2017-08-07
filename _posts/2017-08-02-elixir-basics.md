---
layout: article
title: Elixir basics
---
# {{ page.title }}

![](http://brunakochi.com/images/elixir-vertical.png)

### Summary

A float is 64-bit double precision and support e for exponent values:
Floating point numbers require a decimal after at least one digit
An atom is a constant whose name is its value.
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

Keyword lists:

- Keys are atoms.
- Keys are ordered.
- Keys may not be unique.

```
[foo: "bar", hello: "world"]
```

Maps:

- Maps are un-ordered.
- Keys can be of any type and is unordered.
- Keys are unique.

```
%{:foo => "bar", "hello" => :world}
```

Match operator (=): 

- Say x = 1. If the match succeeds, it returns the value of the equation. Otherwise, it throws an error.

Pin operator (^):

- Pin a variable to a value.

Functions: 

In Elixir, functions are first class citizens.

```
iex> sum = fn (a, b) -> a + b end
iex> sum.(2, 3)
5
```

Pipes: 

If the arity of a function is more than 1, then make sure to use parentheses.

Sigils (~):






Actor model:



--

references:

* [https://elixirschool.com/en/lessons/basics/enum/](https://elixirschool.com/en/lessons/basics/enum/)

{{ page.date | date_to_string }}
