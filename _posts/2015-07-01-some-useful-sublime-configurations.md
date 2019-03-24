---
layout: article
title: 😀 Some useful Sublime Text configurations and usages
---
## {{ page.title }}

#### Sublime Package manager

First thing you have to do is to install the package controll manager. You can basically follow the instructions on this website [https://packagecontrol.io/installation](https://packagecontrol.io/installation) and have it installed on your Sublime Text.

After you install the package manager you can press

`ctrl + shift + p`

or on a Mac it is

`⌘ + shift + p`

to use the package controll manager to install, enable or disable packages that you want to use within Sublime Text.

#### Packages that are useful to almost everyone

* Babel

This helps you style es6 and JSX codes correctly

* SublimeLinter
* SublimeLinter-contrib-eslint

you need to `npm install -g eslint` first to make this work

![](https://s3.amazonaws.com/clearstreet/misc/878affF512AAbCC712.png)

The sublime linters will point out what functions or variables are not used correctly. It highlights the syntax errors or unused variables and stuff in your files so that you can easily see. I think it looks for `package.json` in the folder and once it found the found it will look for `.eslintrc` in the same folder and apply the linting rules to all the subfolders.

* SublimeREPL

![](https://camo.githubusercontent.com/6d88d10200e220c02e08cb7cd79757aa5adeeb5d/687474703a2f2f692e696d6775722e636f6d2f6d6d5951362e706e67)

you can run an node.js or other languages interpreter inside sublime text

* ColorPicker (I don't actually use this)

![](http://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2014/07/1404716694colorpicker.png)

Surprisingly useful when you're coding in css.  The Eyedropper is similar to photoshop but it lets you to choose colors even on your desktop.

#### Snippets

Since I primarily code in Javascript I setup a `console.log` snippet. Yes I am lazy but this gets things done.

```
<snippet>
    <content><![CDATA[
	console.log();
]]></content>
	<tabTrigger>co</tabTrigger>
</snippet>
```
and later when you type `co` and press `tab` it will have a console.log for you.

```
<snippet>
    <content><![CDATA[
	JSON.parse(JSON.stringify());
]]></content>
	<tabTrigger>jsonp</tabTrigger>
</snippet>
```

Or maybe this `jsonp` snippet. I use this surprisingly often.

--

references:

* [https://packagecontrol.io/installation#st3](package control initial settings)
* [http://www.sublimelinter.com/](Sublime linter)
* [https://github.com/wuub/SublimeREPL](SublimeREPL)

{{ page.date | date_to_string }}





