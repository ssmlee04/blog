---
layout: article
title: Text search in MongoDB 
---
## {{ page.title }}

### Abstract

let's say your one of your mongodb document looks like this

```
{
  address: "8003 Benaroya Ln, Huntsville, AL 35802",
  name: "Mex's pork chop"
  industry_id: ObjectId("123412341234123412341234"),
  description: {
    "en": "pig",
    "de": "schwein",
    "ch": "豬排"
  }
}
```

There are many situations where your users want to search for something useful. In this case the intuitive way to do is to search all the fields in the document and index the fields for better searching experience.

### Basic text searching mongodb

```
db.collection.createIndex({"name":"text"})
```
Index on 1 field to enable faster searching

```
db.collection.createIndex({"name":"text", "description.en":"text"})
```
Search on multiple fields

```
db.collection.createIndex({"$**":"text"})
```
Search on all fields

Note that indexing on all fields will make your query slow at times so you need to plan what fields to use and index them wisely

### MongoDB full text search limitations

If you text search "pigs", "schweine" they will work.  But if you search "schweinen", "豬" they will not work. mongodb text search is especially not very efficient for unicode type text search.

Currently when users type unicode characters I will try to convert all of them into english by matching a dictionary first.  Because there are limited number of phrases you need to care about in a language this should be doable. This is very inefficient.

--

references:

* [http://code.tutsplus.com/tutorials/full-text-search-in-mongodb--cms-24835](http://code.tutsplus.com/tutorials/full-text-search-in-mongodb--cms-24835)

{{ page.date | date_to_string }}





