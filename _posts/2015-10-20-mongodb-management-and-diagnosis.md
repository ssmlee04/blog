---
layout: article
title: 😀 mongodb management and diagnosis
---
## {{ page.title }}

### Abstract

mongodb is a thriving nosql database service is the recent years. It gives you really fast `io`s on db as compared to traditional sql databases.

### Mongodb users

You need to create users with the correct permissions to be able to manage your db. When you startup the mongodb server the default behavior is that it accepts connections from anyone in the world.  So whoever have access to your machine will be able to read / write your database.  This is ok on a local development environment but if you're deploying on a production server you need to make sure you start mongodb with

`--auth`

option and stops being stupid.

### Basic usages

##### startup mongodb process:

```
mongod --auth --fork --logpath /var/log/mongodb.log
mongod --auth --fork --logpath /var/log/mongodb.log --bind_ip 127.0.0.1
mongod --auth --fork --logpath /var/log/mongodb.log --smallfiles
```

We make the mongodb process running in the background with auth enabled and outputs logs to log file.

##### create users and roles:

go to mongodb console and do

```bash
use admin
db.createUser(
  {
    user: "admin",
    pwd: "KeepASecret",
    roles: [ "root" ]

  }
)
```

there are some built-in roles such as `root`, `readWrite`, `read`, `dbAdmin`, `dbOwner`, `userAdmin`, `clusterAdmin`, `clusterManager`, `clusterMonitor`, `backup`, `restore`, `readAnyDatabase`, `readWriteAnyDatabase`, `userAdminAnyDatabase`.

But also you would want to create users in your other collections, just do:


```bash
use xxxx
db.createUser(
  {
    user: "myotherdbuser",
    pwd: "KeepASecret",
    roles: ["readWrite","dbAdmin"]
  }
)
```

So that user1 would have access to xxxx table.

### Miscellaneous

open mongodb port 27017 on iptables firewall

```
sudo iptables -I INPUT -p tcp -m state --state NEW,ESTABLISHED --dport 27017 -j ACCEPT
```

backup database

```
mongodump -uxxxx -pxxxx
```

restore database

```
mongorestore -uxxxx -pxxxx
```

### Miscellaneous

* when you upgrade mongodb 2.6.x to 3.0.x the mongodb users will have difficulty logging in.  This is because on 3.x.x version mongodb changed their auth scheme and you have to manually tell mongodb to auth the old users with the previous auth scheme.
(actually it is from MONGODB-CR to SCRAM-SHA-1 and you need to delete and re-create users to make login works.)

[https://jira.mongodb.org/browse/SERVER-17459](https://jira.mongodb.org/browse/SERVER-17459)

* I used Robomongo as gui mongodb console.

![http://i.stack.imgur.com/Q6mg6.png](http://i.stack.imgur.com/Q6mg6.png)

--

references:

* [https://en.wikipedia.org/http://www.pello.info/index.php/blog/enabling-basic-authentication-for-mongodb-databases](http://www.pello.info/index.php/blog/enabling-basic-authentication-for-mongodb-databases)
* [https://en.wikipedia.org/](https://en.wikipedia.org/)
* [http://robomongo.org](http://robomongo.org)

{{ page.date | date_to_string }}





