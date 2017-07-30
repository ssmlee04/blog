---
layout: article
title: Basic Riak Stuff
---
# {{ page.title }}

### Abstract

Riak (KV) is a distributed datastore that promises scalability and high availability. 

### Counter type data storage

Before you're able to use counters data type you need to configure and activate it. You can easily achieve this by doing `riak-admin`

```
riak-admin bucket-type create counters '{"props":{"datatype":"counter"}}'
riak-admin bucket-type activate counters
riak-admin bucket-type status counters

riak-admin cluster status
```


--

references:

* [http://docs.basho.com/riak/kv/2.2.3/developing/data-types/counters/#set-up-a-bucket-type](http://docs.basho.com/riak/kv/2.2.3/developing/data-types/counters/#set-up-a-bucket-type)

{{ page.date | date_to_string }}
