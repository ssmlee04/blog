---
layout: article
title: 😀 Autocannon
---
# {{ page.title }}

Autocannon is yet another HTTP benchmarking tool written in node. It measures latency, requests per seconds and p99 values for you. It's very neat.

Example scripts are as follows:

```
'use strict'
const autocannon = require('autocannon');
const url = 'http://localhost:3000'
const body = JSON.stringify({
  "hello": "world"
})
autocannon({
  url: url,
  connections: 100,
  duration: 10,
  requests: [{
    method: 'POST',
    path: 'http://127.0.0.1/api/something',
    headers: {
      'Content-type': 'application/json'
    },
    body
  }]
}, finishedBench(err, res) => {
  console.log(err);
  console.log(res);
});
```
--

references:

{{ page.date | date_to_string }}



