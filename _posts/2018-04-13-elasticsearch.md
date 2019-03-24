---
layout: article
title: 😀 Elasticsearch
---
# {{ page.title }}


### Elasticsearch

Elasticsearch is a open-source, distributed and highly-available search engine. It has many other great integrations like logging, charting, admin panel that's also developed by the same company that makes it easier to work with Elasticsearch

#### Index:

You can create as many indexes as you like. A typical use case is you can create an index per day for logging so you can query the logs easily across different days.

On the official website it also says something like this:

`Instead, it sometimes makes sense to split data apart for data organization and performance reasons. In this scenario, we are assuming each user has a lot of data, and we want them separate. Elasticsearch has no problem letting us create an index per user.`

#### Scoring:

You can assign weights to your search criterions so that your search would be weighted by the relevence score.

#### Term & Fuzzy

Term search is looking for the exact term in the index. You can also do fuzzy search using `îce` or `īce` to match words `ice` which is very cool.

#### Constant score searching

If you don't care about scoring you can do a `constant_score` search.

### Kibana

Kibana is a gui to run queries and do charting for Elasticsearch.

![](https://i.stack.imgur.com/qWwfU.png)

### Logstash

Logstash is a common storage engine for elasticsearch. Although Elasticsearch has build-in storage engine you can configure it to use other storage engines such as mongodb or logstash.

### ELK stack

On the website it says:

`So, what is the ELK Stack? "ELK" is the acronym for three open source projects: Elasticsearch, Logstash, and Kibana. Elasticsearch is a search and analytics engine. Logstash is a server‑side data processing pipeline that ingests data from multiple sources simultaneously, transforms it, and then sends it to a "stash" like Elasticsearch. Kibana lets users visualize data with charts and graphs in Elasticsearch.`

### Sample docker images

A sample `docker-compose.yml` to start all those services looks like this

```
version: '2.2'
services:
  elasticsearch:
    image: docker.elastic.co/elasticsearch/elasticsearch:6.2.3
    container_name: elasticsearch
    ports:
      - 9200:9200

  kibana:
    image: docker.elastic.co/kibana/kibana:6.0.0
    container_name: kibana
    depends_on:
      - elasticsearch
    environment:
      ELASTICSEARCH_USERNAME: "user"
      ELASTICSEARCH_PASSWORD: "pass"
    ports:
      - 5601:5601
```

### Examples Devtool commands

```
GET twitter/_search
{
  "size": 1,
  "query": {
    "match_all" : {}
  }
}
```

or

```
GET /_search
{
    "size" : 1,
    "query" : {
        "term" : { "user" : "kimchy" }
    }
}
```

This gets 1 document from the index.

```
GET twitter/_search
{
    "size" : 3,
    "query" : {
        "fuzzy" : { "message" : "indexed" }
    }
}
```

You can do fuzzy search very easily like this.

```
PUT users
{
  "mappings": {
    "user": {
      "properties": {
        "id": {
          "type":  "keyword"
        }
      }
    }
  }
}
```

This creates a user mapping.

```
GET users_index/_search
{
  "query": {
    "match" : {
      "id": "123"
    }
  }
}
```

Search a profile with id `123`

```
PUT users_index/user/123
{
    "player_id": "123",
    "foo": {
      "bar": true
    }
}
```

This updates the user profile.

--

references:

- [https://github.com/elastic/elasticsearch](https://github.com/elastic/elasticsearch)
- [How To Use Logstash and Kibana To Centralize Logs On Ubuntu 14.04
](https://www.digitalocean.com/community/tutorials/how-to-use-logstash-and-kibana-to-centralize-and-visualize-logs-on-ubuntu-14-04)

{{ page.date | date_to_string }}
