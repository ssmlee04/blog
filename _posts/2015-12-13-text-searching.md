---
layout: article
title: 😀 Text search in MongoDB
---
## {{ page.title }}

### Abstract

let's say your one of your mongodb document looks like this

```
{
  address: "8001 Benaroya Ln, Huntsville, AL 35802",
  name: "Mex's pork chop"
  industry_id: ObjectId("123412341234123412341234"),
  description: {
    "en": "pig",
    "de": "schwein",
    "ch": "豬排"
  }
}
```

The most intuitive way to do is to search all the fields in the document and index all the fields for better matches. Althought many times this is just not a right thing to do.

### Basic indexing

Create an index on 1 field:

```
db.collection.createIndex({"name":"text"})
```

Index on multiple fields:

```
db.collection.createIndex({"name":"text", "description.en":"text"})
```

Index on all fields:

```
db.collection.createIndex({"$**":"text"})
```

Note that indexing on all fields will make your query slow at times. In general you don't want to do it.

### full text search limitations

If you text search "pigs", "schweine" they will work.  But if you search "schweinen", "豬" they will not work. mongodb text search is not very efficient for dealing with unicode type text search or plurals.

--

references:

* [http://code.tutsplus.com/tutorials/full-text-search-in-mongodb--cms-24835](http://code.tutsplus.com/tutorials/full-text-search-in-mongodb--cms-24835)

{{ page.date | date_to_string }}





