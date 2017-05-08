---
layout: article
title: GraphQL
image: https://www.gravatar.com/avatar/5d3b5ee75a670827289364ba8dc89ed4?s=256&d=identicon&r=PG
---
# {{ page.title }}

### Abstract

GraphQL is not a database but instead it's a way of fetching data for you and can work with any database.

It's a query langauge and a format for asking for data. It provides an standard of what to respond when someone sends graphQL something. 

Why is REST not enough? Fetching multiple resources requires multiple HTTP requests and we don't want that to slow down loading of our application. In stead you want to have one endpoint for serving all the api endpoints and you can bundle everything into 1 response and make thing easy. 

--

references:

* [GraphQL and Microservice Architecture](http://stackoverflow.com/questions/38071714/graphql-and-microservice-architecture)
* [GraphQL vs REST: Overview](https://philsturgeon.uk/api/2017/01/24/graphql-vs-rest-overview/)
* [Nested schemas example](https://gist.github.com/xpepermint/7376b8c67caa926e19d2)
* [Queries and Mutations](http://graphql.org/learn/queries/)
* [https://medium.com/@gethylgeorge/setting-up-a-simple-graphql-server-with-node-express-and-mongoose-ff8a1071af53](https://medium.com/@gethylgeorge/setting-up-a-simple-graphql-server-with-node-express-and-mongoose-ff8a1071af53)
{{ page.date | date_to_string }}
