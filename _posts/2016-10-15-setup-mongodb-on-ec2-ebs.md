---
layout: article
title: Setup MongoDB on EC2 with EBS
---
# {{ page.title }}

### Abstract

MongoDB has become more popular in NoSql database solutions. There are many MongoDB service providers that enables you to host and maintain your databases. You can choose to use those services, or you can either host a MongoDb yourself on your machines. And it's actaully not such a bad idea to maintain your databases early on and get yourself familiar with db maintenance and stuff.

AWS EC2 is a web service that privides cloud computing for your service. You have full control of your virtual machine. For many web developers EC2 means pre-configured security-enhanced virtual machine that you can create http servers to run your service on. It can also be used to store large amounts of data if you attach some extra storages to the instance, which is what we are going to do. 

Actually there are a lot of articles explains how to do this. I would only briefly walk through the steps that I (normally) do in the following article.

![](https://qph.ec.quoracdn.net/main-thumb-t-4387-200-LkLMRevPrfDLxI1HLNWjSOmZygn9Ndi8.jpeg)
![](http://www.dagtech.com/wp-content/uploads/2015/09/aws-ec2_logo_small.jpg)

### Steps to run a Mongodb on your EC2

* Spin up an EC2 instance
* Create an extra EBS volume 
* Initialize your EC2
* Mount those volumes and create a filesystem there. 
* Configure your db, ec2 so that your MongoDB can accept requests from now on.

### Advanced settings

You can deploy MongoDB across machines. Also on each EC2 you can do RAID-x for your data. 

### Miscellaneous

Please be noted that the default EC2 stroage is ephemeral, which is saying that if you accidentally shuts down your instance or the instance crashes for some reason, the changes you made to your machine would be damaged or wiped out. Which is definitely not something you want to do when you're hosting your database there. 


--

references:

* [https://docs.MongoDB.com/ecosystem/platforms/amazon-ec2/](https://docs.MongoDB.com/ecosystem/platforms/amazon-ec2/)

{{ page.date | date_to_string }}
