---
layout: article
title: 😀 Playing with Docker
---
# {{ page.title }}

### Abstract

Docker is a container service where you can have a clean and unified running environment for your applications.

![https://d3nmt5vlzunoa1.cloudfront.net/phpstorm/files/2015/10/large_v-trans.png](https://d3nmt5vlzunoa1.cloudfront.net/phpstorm/files/2015/10
/large_v-trans.png)

You can launch a service very easily in the same ways. Also you can make your standard docker images to run your application on a specific infrastructures. This eliminates the time to setup the environment so that we can stay focused on developing the application.

Also each docker container is like a sandbox. You can use it to split the running environments so that applications won't talk to each other unless necessary. This ensures that we can have a higher security setting for our applications.

### docker-cli

There are some docker commands that I use often.

* `docker build`
* `docker run`
* `docker stop`
* `docker rm`
* `docker rmi`
* `docker commit`
* `docker push`
* `docker stop $(docker ps -a -q)` # stop all containers
* `docker rm $(docker ps -a -q)` # remove all removeable containers
* `docker rmi $(docker images -a -q)` # remove all images
* `docker volume ls -qf dangling=true | xargs -r docker volume rm`

### Dockerfile

There might be situations that you want to create docker images on your own. For example the following image helps you run mongodb and set the default username and password.

https://github.com/tutumcloud/mongodb

There are some commands in the Dockerfile that I used often:

* `cmd`
* `expose`

### Kitematic

kitematic is has a eays-to-use gui interface for you to launch your docker containers in no time. Which is very impressive.

![https://docs.docker.com/kitematic/images/browse-images.png](https://docs.docker.com/kitematic/images/browse-images.png)

### Misc

This is a simple repo that I created for you to start 1 container of node.js process and 1 container of mongodb process and make the node.js container talk to the mongodb container.

https://github.com/ssmlee04/vm-docker

What it is doing is it will build two images based on the two dockerfiles and make one docker container talk to the other. All you need to do is install docker-compose and do

```bash
$ docker-compose up
```

to start the 2 containers.

--

references:

* [http://www.dwmkerr.com/learn-docker-by-building-a-microservice/](http://www.dwmkerr.com/learn-docker-by-building-a-microservice/)
* [https://www.toptal.com/git/the-advanced-git-guide?utm_campaign=blog_post_the_advanced_git_guide&utm_medium=email&utm_source=blog_subscribers](https://www.toptal.com/git/the-advanced-git-guide?utm_campaign=blog_post_the_advanced_git_guide&utm_medium=email&utm_source=blog_subscribers)

{{ page.date | date_to_string }}
