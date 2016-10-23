---
layout: article
title: Mac Terminal Tools
---
# {{ page.title }}

### Abstract

...

### Things that I do

* Add colors to your terminal

edit your `~/.bash_profile` and add the following at the end of the file. 

```
export CLICOLOR=1
export LSCOLORS=GxFxCxDxBxegedabagaced
```

Later whenever you opens a shell it will load the setting and add some colors to your screen. Yay

![](http://substack.net/images/github.png)


`⌘ + D`

Split the window 

`Shift + ⌘ + D`

Undo split the window


### things I do with zsh

```
export PS1='%m %1d$ '
```

This displays the machine name (%m) and the trailing component of the current path (%1d). 



--

references:

* [Add Color to the Terminal in Mac OS X
](http://osxdaily.com/2012/02/21/add-color-to-the-terminal-in-mac-os-x/)

{{ page.date | date_to_string }}
