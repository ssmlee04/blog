---
layout: article
title: 😶 Javascript getter and setter
---
# {{ page.title }}

Apparently you can do this:

These statements define a getter and setter for the year property:

```
var d = Date.prototype;
Object.defineProperty(d, 'year', {
  get: function() { return this.getFullYear(); },
  set: function(y) { this.setFullYear(y); }
});
```
These statements use the getter and setter in a Date object:

```
var now = new Date();
console.log(now.year); // 2000
now.year = 2001; // 987617605170
console.log(now);
// Wed Apr 18 11:13:25 GMT-0700 (Pacific Daylight Time) 2001
```

--

references:

* [add a link in markdown](https://clearstreet.io)

{{ page.date | date_to_string }}
