---
layout: article
title: 😱 Basic Riak Stuff
---
# {{ page.title }}

### Abstract

Riak (KV) is a distributed NoSQL database that promises scalability and high availability. It is used by big companies like Riot and Rovio. According to the Basho website Riot has millions of concurrent players at any given moment and they use Riak to store user session data.

### Resiliency

![](http://basho.com/wp-content/uploads/2016/04/riakt-kv-masterless-architecture.jpg)

In case of network failures it is able to re-coordinate the clusters and read / write to different nodes when necessary. This eliminates single point of failure.

Note that this also gives your scalability.

### Configurations

There are a few properties that are important to Riak's performance and behaviors such as bucket types, replication types... etc.

#### Counter type

Before you're able to use counters data type you need to configure and activate it. You can easily achieve this by using `riak-admin-cli`

```
riak-admin bucket-type create counters '{"props":{"datatype":"counter"}}'
riak-admin bucket-type activate counters
riak-admin bucket-type status counters

riak-admin cluster status
```

#### Create a bucket

```
curl -v http://127.0.0.1:8098/riak/newBucket -X PUT -H Content-Type:application/json --data-binary '{"props":{"n_val":5, "datatype":"counter"}}'
```

--

references:

* [http://docs.basho.com/riak/kv/2.2.3/developing/data-types/counters/#set-up-a-bucket-type](http://docs.basho.com/riak/kv/2.2.3/developing/data-types/counters/#set-up-a-bucket-type)

{{ page.date | date_to_string }}
