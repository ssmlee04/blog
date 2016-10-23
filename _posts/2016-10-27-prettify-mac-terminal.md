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


### Misc

Other default settings that I use

* For ~/.bash_profile

```
zsh
```

Use zsh shell instead of default bash shell

* For ~/.zshrc

```
source ~/.zsh/zsh-autosuggestions/zsh-autosuggestions.zsh

# Prettify your zsh shell
export PS1='%m %1d$ '
export CLICOLOR=1
export LSCOLORS=GxFxCxDxBxegedabagaced

source ~/.bashrc
```

zsh-autosuggestions is an utility that suggests commands as you type, based on the command history.

* For ~/.bashrc

```
# load nvm
if [ -s ~/.nvm/nvm.sh ]; then
        NVM_DIR=~/.nvm
        source ~/.nvm/nvm.sh
fi

# git tab completion (homebrew)
if [ -f `brew --prefix`/etc/bash_completion.d/git-completion.bash ]; then
    . `brew --prefix`/etc/bash_completion.d/git-completion.bash
fi

# load avn
[[ -s "$HOME/.avn/bin/avn.sh" ]] && source "$HOME/.avn/bin/avn.sh" # load avn
```

--

references:

* [Add Color to the Terminal in Mac OS X
](http://osxdaily.com/2012/02/21/add-color-to-the-terminal-in-mac-os-x/)

{{ page.date | date_to_string }}
