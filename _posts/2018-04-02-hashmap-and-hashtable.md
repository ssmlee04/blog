---
layout: article
title: 😀 Difference between hashmap and hashtable
---
# {{ page.title }}

- hashtable is synchonized, hashmap is async.

    * synchonized here means get / set is an atomic operation. This means if you have 2 threads trying to get / set value from the hashtable concurrently each operation would be atomic.

- Hashtable does not allow null keys or values. HashMap allows one null key and any number of null values.

- hashmap get is O(1) on average but if your hashing function is bad you would be seeing something like O(n)
- hashmap put is also O(1)

--

references:

* [https://stackoverflow.com/questions/40471/differences-between-hashmap-and-hashtable](https://stackoverflow.com/questions/40471/differences-between-hashmap-and-hashtable)
* [https://stackoverflow.com/questions/4553624/hashmap-get-put-complexity](https://stackoverflow.com/questions/4553624/hashmap-get-put-complexity)
{{ page.date | date_to_string }}
