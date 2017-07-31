---
layout: article
title: Basic Riak Stuff
---
# {{ page.title }}

### Abstract

Riak (KV) is a distributed NoSQL database that promises scalability and high availability. Riak can be easily integrated into Big Data technologies like Apache Spark or Apache Solr. It is used by big companies like Riot and Rovio. According to the Basho website Riot has millions of concurrent players at any given moment and they use Riak to store user session data. 

IT appears that Riak is good for retrieving user data and for chatting applications. 

It also says: As long as your Riak KV client can reach one Riak server, it should be able to write data.

### Configurations

There are a few properties that are important to Riak's performance and behaviors such as bucket types, replication types... etc. 

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
