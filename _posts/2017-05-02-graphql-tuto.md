---
layout: article
title: 😀 GraphQL
---
# {{ page.title }}

### Abstract

GraphQL is a way of talking to your databases efficiently.

It's a query langauge and a format for asking for data. It provides an standard of what to respond when someone sends graphQL something.

A typical use case is when you are fetching multiple resources from the server you are sending multiple HTTP requests to the server, and the server sends multiple requests to the database and you end up spending a lot of time waiting for those responses. Sometimes it's only after you get all the responses you can start render the views according. Also there are situations when you're getting a lot of duplicated data in two requests and it's a waste of resources.

But this does not have to be the case if you're using graphQL. Instead you only need to have one endpoint to serve all the requests and you can join the related requests relations into 1 response and make things easy.

### Queries and Mutations

Query and mutation is the basic keyword for graphQL. You can think of queries as HTTP `GET`s and mutations as HTTP `POST`s, `PUT`s or `DELETE`s. It's just simple as that.

### Properties

- You need to specify schemas and types for your data.
- You can use fragments to make your query look really efficient.

![](https://i.stack.imgur.com/SR9EJ.png)

### Misc

I developed a simple ghaphql-express project that communicates with mongodb and please feel free to clone the stuff and see how it works.

[https://github.com/ssmlee04/graphql-express-example.git](https://github.com/ssmlee04/graphql-express-example.git)

--

references:

* [GraphQL and Microservice Architecture](http://stackoverflow.com/questions/38071714/graphql-and-microservice-architecture)
* [GraphQL vs REST: Overview](https://philsturgeon.uk/api/2017/01/24/graphql-vs-rest-overview/)
* [Nested schemas example](https://gist.github.com/xpepermint/7376b8c67caa926e19d2)
* [Queries and Mutations](http://graphql.org/learn/queries/)
* [Setting up a simple GraphQL Server with Node, Express and Mongoose](https://medium.com/@gethylgeorge/setting-up-a-simple-graphql-server-with-node-express-and-mongoose-ff8a1071af53)
{{ page.date | date_to_string }}
