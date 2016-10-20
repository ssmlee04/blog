---
layout: default
title: CSS styling with bootstrap and flexbox
---
# {{ page.title }}

There are some techniques that I use often to arrange the layouts on a website or mobile devices. I'll list of few of them below. 

## Bootstrap

### Grid system

A screen is divided into 12 parts horizontally.  You can use these classes to control the row and column layouts.

Also it used CSS3 tricks to detect your viewport size and check whether it is a mobile device, an iPad or a normal screen. You can use different classes to control layouts in different viewports. 

### Tables

There are some useful properties in a table class. All you need to do is give your table `.table` class name. 

`.table-striped` is for alternating rows.

`.table-hover` is for mouseover effects.

### Forms

`.form-inline` class will grant `display-inline` property to all form elements.

`.readonly` class will make the input field read-only

You can wrap the input fields inside a form with div elements with `.form-control` class. 

### Buttons

`.btn .btn-default .btn-primary`  ... etc will give styling to your buttons. easy

`.btn-lg .btn-sm .btn-xs` will give you buttons with different sizes

![button colors](http://i.stack.imgur.com/xPI5t.png)


## Flexbox (in React Native apps)

flexbox aims to provide a more flexible way to design your layout. It can move around objects within a container easily. A flex container expands items to fill available free space, or shrinks them to prevent overflow.

```
.container {
  display: flex; /* or inline-flex */
}
```

All you need to do is grant `.container` property to a View.

When we use flexbox, we can arrange the children of a container in two directions, vertically or horizontally.

![](http://moduscreate.com/wp-content/uploads/2015/07/02-flex-direction.jpg)
 
`flexDirection:'row'` you can give this styling to a View so children elements can align in the direction you want

![](https://css-tricks.com/wp-content/uploads/2014/05/flex-direction1.svg)

```
.container {
  justify-content: flex-start | flex-end | center | space-between | space-around;
}
```

`justify-content` property is especially useful for headers.

`flex-grow, flex-shrink` this expands or shrinks the elements to fit the entire width.

![](https://css-tricks.com/wp-content/uploads/2013/04/justify-content.svg)

## Miscellaneous

Bootstrap is very big. Even the minified version has over 100 kb in size. 


--

references:

* [http://getbootstrap.com/](http://getbootstrap.com/)
* [https://css-tricks.com/snippets/css/a-guide-to-flexbox/](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* [http://moduscreate.com/react-native-layout-system/](http://moduscreate.com/react-native-layout-system/)
* [https://www.w3.org/TR/css-flexbox-1/#property-index](https://www.w3.org/TR/css-flexbox-1/#property-index)

{{ page.date | date_to_string }}
