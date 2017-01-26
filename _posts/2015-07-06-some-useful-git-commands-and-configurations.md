---
layout: article
title: Some useful git commands and configurations
---
## {{ page.title }}

### Abstract

Git is a distributed version control system (DVCS) to handle projects with many people working together. It helps you to keep track of what your code looks like at any time and if necessary you can go back in time to do something about the code easily.

### Some basic configurations:

```bash
$ git config --global color.ui true
```

it gives your terminal color when displaying git stuff

```bash
$ git config --global credential.helper "cache --timeout=3600"
```

by doing this you won't have to enter your username and password when you're pushing refs to the remote 

```bash
$ git config --global alias.files '!f() { git diff --name-status $1^ $1; }; f'
```

list the files changed for a specific commit ( later you can simply do `git files development` to see difference of `development` and `development^` )

```bash
$ git config --global alias.hide 'update-index --assume-unchanged'
$ git config --global alias.unhide 'update-index --no-assume-unchanged'
```

select / unselect the files in the working tree that cannot be updated.

```bash
$ git config --global alias.lg "log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr)%Creset' --abbrev-commit --date=relative --all"
```

this visualized the commit trees for you (important)

![https://s3.amazonaws.com/clearstreet/misc/d1e4a2536d4ff16a23.png](https://s3.amazonaws.com/clearstreet/misc/d1e4a2536d4ff16a23.png)

```bash
$ git config user.name “Shih-Min Lee”
$ git config -g user.email “ssmlee04@gmail.com”
```

when you want to do global configuration. add `-g` flag. Otherwise it's per-repo level configuration

### Some other super lazy configurations

If you're super lazy you can do git df instead of git diff... etc

```bash
$ git config --global alias.df diff
```

```bash
$ git config --global alias.dt difftool
$ git config --global alias.st status
```

not very useful for me, though

### Mac-specific configs

* on mac. .gitconfig is locate at `$HOME/.gitconfig`
* the default git on mac is something called Apple git, you might want to switch it to a real git. You can simply do 

```
brew install git
```

but the current git is pointed to default apple git location. you need to add the path to the `$PATH` variable

```
export PATH="/usr/local/bin:$PATH"
```

in `~/.bash_profile` to solve this issue. Reason why you want to switch away from Apple git is because you might want to install something like `bash-completion`, which behaves just like git autocomplete in ubuntu when you press the Tab key. 

`$ git --version`

```
> Shih-Mins-MacBook-Pro:project1 ssmlee04$ git --version
> git version 2.3.2 (Apple Git-55)
```

```
brew install bash-completion
```

then you will be using a newer version git

`$ git --version`
> Shih-Mins-MacBook-Pro:project1 ssmlee04$ git --version
> git version 2.2.1

### Some basic commands

```bash
$ git clone
```

You can use this command to clone git projects to local machine.  For example https://github.com/linnovate/mean.git is a open source project and you can simply do `git clone https://github.com/linnovate/mean.git` to check the source code or start working on the project.
In the future if you feel your changes would contribute to the project you can push your code and submit a pull request (PR) to notify the project manager so they can review your code or maybe even merge your code into the codebase.

```bash
$ git checkout -b new-branch-name
$ git checkout -b new-branch-name develop
```

you can create a branch `new-branch-name` with above methods. Also you can create a branch directly from a specific branch

```bash
$ git branch
```

list the branches that exists in the local repo.  This list might not be in sync with your remote repo and if you want to list the remote branches you might want to do one of the following: 

```bash
$ git ls-remote --heads
$ git remote show origin
```

### <font color='red'>Some extremely stupid things you might want to avoid</font>

* Get rid of all the credentials in your code before pushing your code to the remote, especially if you're pushing to a public repo (been there done that..)
* If you have to push config file to the repo for the first time. You can tell git to stop tracking this file by doing `git update-index --assume-unchanged <file>` and specify the files in `.gitignore` so later when you enter the credentials you don't need to worry about credentials leaked.
* What I do is have a config file with something like this

```
config.js
{
  mongo: {
    user: process.ENV.MONGO_USER,
    pass: process.ENV.MONGO_PASS 
  }
}
```

and then you just set the environment variables on your server or on your local machine

### Trim intermediate commits

you can do the following to get rid of intermidiate commits on local and remote
(generally speaking you shouldn't change info of your git tree when you have pushed to remote already)

```
$ git reset --soft HEAD~5
$ git commit
$ git push --force origin master
```

### Misc

* If the folder is empty, it will not be added into project. But you might want to do something like this: 

* [How can I add an empty directory to a Git repository?](http://stackoverflow.com/a/932982/1355175)

* when switch repo folders you will at times have no access to private repos under that organization. Make sure you are a logged-in user under that orgnization by doing

`ssh-add ~/.ssh/id_rsa_organization`

and then use

`ssh git@github.com`

to verify your identity.


A successful Git branching model:
![](http://nvie.com/img/git-model@2x.png)

--

references:

* [http://dereenigne.org/git/set-git-email-address-on-a-per-repository-basis](http://dereenigne.org/git/set-git-email-address-on-a-per-repository-basis)
* [How can I add an empty directory to a Git repository?](http://stackoverflow.com/a/932982/1355175)
* [http://aknow-work.blogspot.tw/2013/10/git.html](http://aknow-work.blogspot.tw/2013/10/git.html)
* [http://pcottle.github.io/learnGitBranching/](http://pcottle.github.io/learnGitBranching/)
* [http://nvie.com/posts/a-successful-git-branching-model/](http://nvie.com/posts/a-successful-git-branching-model/)

{{ page.date | date_to_string }}
