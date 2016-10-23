---
layout: article
title: Command Line Utilities for the Terminal
---
# {{ page.title }}

### Abstract

When working on Linux command line you would like to utilize command line tools that help you become more productive. There are a lot of things that you can do. Actually you can even choose what kind of shell to run on your command line. I'll talk a little bit about this and show you a tool called `zsh`.

### zsh

zsh is a type of (smarter) shell that gives you a lot of productivity. I'll show you some really cool stuff that you can do with zsh below. 

### Some default settings for zsh

* Add colors to your terminal

edit your `~/.zshrc` and add the following at the end of the file. 

```
export CLICOLOR=1
export LSCOLORS=GxFxCxDxBxegedabagaced
```

So your terminal would look something like this.

![](https://i.stack.imgur.com/l3dJR.png)

* Display your current working directory

```
export PS1='%m %1d$ '
```

This displays the machine name (%m) and the trailing component of the current path (%1d). 

* zsh-autosuggestions

This is a smart utility that records your historical commands so as to predict what you are going to do in your future commands. You can press → key to autocomplete the commands. 

![](https://i.stack.imgur.com/cm4wR.png)

### Misc

The following are some default configs that I load on my machine. Since `zsh` loads configs from `~/.zshrc` you would need to import your environment variables as such into `~/.zshrc`. You can also put stuff into `~/.bashrc` and have `~/.zshrc` source them instead. 

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

* For ~/.bashrc

```
# load nvm
if [ -s ~/.nvm/nvm.sh ]; then
        NVM_DIR=~/.nvm
        source ~/.nvm/nvm.sh
fi

# load nvm on a mac
export NVM_DIR="/Users/username/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"  # This loads nvm

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
