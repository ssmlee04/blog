---
layout: article
title: How to structure an nodejs + expressjs app
---
# {{ page.title }}

#### Synopsis

Basically you could start with any express.js boilerplates; look through it, and evaluate the problem in a few aspects

* is it easy to separate the works among groups of people? 
* does the app structure makes sense? would you have difficulty understanding the app structure a while later when you rework on the same thing?
* in the future if you want to add functionalists would it be difficult to do so? (say you want csrf support, or cors support)

![http://i.stack.imgur.com/awN4X.png](http://i.stack.imgur.com/awN4X.png)

This is one example of my app structure. What is inside my src folder is the modules you will be developing. You put configs and utilities in other folders where you do not expect to change too often. To me it's easier to develop stuff if all the modules are decoupled and by doing this you can separate your work among your teammates, if any.

--

references:

* [http://stackoverflow.com/a/32729689/1355175](http://stackoverflow.com/a/32729689/1355175)

{{ page.date | date_to_string }}
