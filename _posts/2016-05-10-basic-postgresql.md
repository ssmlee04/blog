---
layout: article
title: 😀 PostgreSql jsonb
---
# {{ page.title }}

So apparently starting from postgres 9.4 there's a new type called jsonb which supports json like field properties. And you can search what is inside the json. It's pretty sweet.

According to a stackoverflow post:


- json stores JSON documents as `text`, performing validation when the documents are stored, and parsing them on output if needed (i.e. accessing individual fields); it should support the entire JSON spec. Since the entire JSON text is stored, its formatting is preserved.

- jsonb takes shortcuts for performance reasons: JSON data is parsed on input and stored in binary format, key orderings in dictionaries are not maintained, and neither are duplicate keys. Accessing individual elements in the JSONB field is fast as it doesn't require parsing the JSON text all the time. On output, JSON data is reconstructed and initial formatting is lost.

--

references:

* [https://www.depesz.com/2014/03/25/waiting-for-9-4-introduce-jsonb-a-structured-format-for-storing-json/](https://www.depesz.com/2014/03/25/waiting-for-9-4-introduce-jsonb-a-structured-format-for-storing-json/)
* [https://stackoverflow.com/questions/22654170/explanation-of-jsonb-introduced-by-postgresql](https://stackoverflow.com/questions/22654170/explanation-of-jsonb-introduced-by-postgresql)

{{ page.date | date_to_string }}
