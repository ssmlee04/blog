---
layout: article
title: Playing with Docker
---
# {{ page.title }}

This is a simple repo that I created for you to start 1 container of node.js process and 1 container of mongodb process and make the node.js container talk to the mongodb container. 

https://github.com/ssmlee04/vm-docker

### docker-cli

There are some docker commands that I use often. 

* `docker build`
* `docker run` 
* `docker stop`
* `docker rm`
* `docker rmi`
* `docker commit`
* `docker push`

### Dockerfile

There might be situations that you want to create docker images on your own. For example the following image helps you run mongodb and set the default username and password. 

https://github.com/tutumcloud/mongodb

There are some commands in the Dockerfile that I used often: 

* `cmd`
* `expose`

### Kitematic

kitematic is has a eays-to-use gui interface for you to launch your docker containers in no time. Which is very impressive. 

![https://docs.docker.com/kitematic/images/browse-images.png](https://docs.docker.com/kitematic/images/browse-images.png)

--

references:

* [http://www.dwmkerr.com/learn-docker-by-building-a-microservice/](http://www.dwmkerr.com/learn-docker-by-building-a-microservice/)

{{ page.date | date_to_string }}
