---
layout: article
title: 😱 Separate a mean.io project to separate frontend and backend structure
---
## {{ page.title }}

I have originally choose to build my website using the MEAN.io boilerplate where it creates an app that wraps an express server inside that takes care of the db connection, server creation, config loading and, on the website it uses Angular.js to handle the views, routings to the server. So you can have a team of people to focus on developing your app separately.

mean.io have also configured the Angular stuff for you so you don't need to worry about Angular router, providers or interceptors.

It's great in that it will let you develop your MVP in a very short time. After I worked on it for a while I have realized it has limitations and eventually I have to switch to other frameworks for the following reasons:

* It includes `bootstrap.css`, `angular.js` and all those libraries are big (over 100kb).
* In Angualr the `$watch` function will watch for variable changes for you.  Once there's a change in the watched variable `$digest` will be called and angular will decide what variables should be re-rendered.  But there are situations that when `$scope.a` variable change it will lead to changes in the `$scope.b` variable.  And `$scope.b` changes will trigger `$scope.c` change and later trigger `$scope.a` change.  This will create an infinite `$digest` loop that crashs the app. I have encountered a few of this situation in the past when the controller logic gets complicated.
* It uses hashbangs (`#!`). Angular will parse the route upon seeing the hashbang and use javascript to generate the pages dynamically.  Which means the website has no content when a google crawler enters the website because nothing has been rendered yet and Javascript might not run for those google crawlers. It's really bad for SEO.
* The backend and the frontend code all exist in the same repo. It's cool for a small number of people to work together but when you have a larger website it might be a better idea to separate the backend and frontend code to a different repos. Each repo is doing very different things and can be monitored or scaled separately.
* In the future you will have devices connected to your service API. Which means most requests are targeting the API server but not the website.

Later I have switched the frontend to React flux and there are great benefits of doing this. I'll explain more about what I am doing with React in future posts.

--

references:

* [mean.io](http://mean.io/#!/)
* [linnovate/mean](https://github.com/linnovate/mean)

{{ page.date | date_to_string }}





