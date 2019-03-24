---
layout: article
title: 😀 Some useful queue modules in node.js
---
# {{ page.title }}

### promise-queue

[https://github.com/azproduction/promise-queue](https://github.com/azproduction/promise-queue)

Basic usage:

```
var maxConcurrent = 1;
var maxQueue = Infinity;
var queue = new Queue(maxConcurrent, maxQueue);

app.get('/version/:user/:repo', function (req, res, next) {
    queue.add(function () {
        // Assume that this action is a way too expensive
        // Call of this function will be delayed on second request
        return downloadTarballFromGithub(req.params);
    })
    .then(parseJson('package.json'))
    .then(function (package) {
        res.send(package.version);
    })
    .catch(next);
});
```

### kue

[https://github.com/Automattic/kue](https://github.com/Automattic/kue)

Basic usage:

```
queue.create('email', {
    title: 'welcome email for tj'
  , to: 'tj@learnboost.com'
  , template: 'welcome-email'
})

queue.process('email', function(job, done){
  fn(job.data.to, done);
});
```

--

{{ page.date | date_to_string }}
