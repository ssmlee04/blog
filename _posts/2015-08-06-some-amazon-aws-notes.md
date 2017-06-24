---
layout: article
title: Some Amazon AWS memos
---

## {{ page.title }}

### Amazon AWS

At the early stages of developing a service you wouldn't need to care about the scalability, availablity... etc.  You're focusing on developing the app with the fastest speed and the least cost. It could be as simple as one http server and maybe you would be hosting your service on linode, digitalocean or whatever.  Companies like digitalocean basically gives you a linux VM and you can pretty much do whatever you want with it. You can run a db inside, run services inside, host a mail server and they're all very easy.  But it comes with a cost like the extra time you're dealing with configuring the machine, twicking the iptables, dealing with network securities or doing the sshd setting.  You run it for a while and later you face bottlenecks in your running your app and then maybe it's about time to move your service to AWS.

Amazon AWS known as an IaaS that does way more than just one linux vm can offer. I'll write a brief summary as follows:

### Core resources

* EC2

This is the place to run your service. For startups you can run db, host a mail server, run your app here and serve static contents and html here.  If you're running out of disk space simply attach EBS storage to your EC2 instance. It also does snapshots automatically for you for very cheap.

You can assign auto scaling group on your EC2. That is when EC2 reachs a level of CPU / memory usage it will create new EC2 instances for you that does the same thing. 

You can setup alarms for your EC2. When EC2 have unusual traffic or CPU usages you can turn off, reboot or terminate this instance.

You can setup elastic ips for your EC2 instances.  So if you have many EC2 instances you don't have to worry about DNS routing problems.

* S3

You can store and serve your static files on S3 cloud storage. You can even host a website on S3. Your app might be using some S3 functionalities like uploading to S3 so make sure you create a role that does those things that you can use those roles in your applications. 

* Codedeploy

After you codes are fully tests on CI it can take over the code and deploy for you.  Basically you need to install something called `codedeply agents` on your EC2 so it can be triggered to do the task.

* CloudFront

The basic idea for Cloudfront is that you can make the static files in S3 serve faster to your clients via CloudFront. It stores the assets at the `edges` so all future request of the same asset AWS would look for a cached version of the asset in the edges first and serve. 

* Route 53

You use this with Cloudfront to handle DNS redirections. 


### Useful Resources with Advanced Configurations

* Lambda

You can write small functions that does things for you automatically. For example: you can write a function that when you upload a big image to S3 it will at the same time generate a thumbnail for you in a separate bucket.

* Elastic beanstalk

When one EC2 instance is not enough for your service then you need to open up many EC2 instances to serve.  And Elastic beanstalk takes care of things like DNS routing, load balancing, conditional instance creations.

* ElasticCache

You will basically store info that requires fast access in here like the user session.

### Misc

* Amazon Resource Names (ARNs): ARNs uniquely identifies AWS resources.
* You can specify permissions to IAM roles by creating a policy and attach to it.
* You can't assign a role to an existing EC2 instance; you can only specify a role when you launch a new EC2 instance.
* If you make a change to a role, the change is propagated to all EC2 instances owning that rule


### Things to pay attention to when start using AWS

* Security Credentials - never use a root credential. use a IAM user to assign groups and roles instead.  And if you need to put the credentials in a file and let your project read it.  Make sure those credential files are ignored by `git` or make sure you're pushing to a private repo.  It will cost you a fortune when you leak your root credentials to a public repo.  People will use it to open EC2 instances and you will see a big figure in your bill.
* use MFA - setup MFA for better security

--

references:

* [http://aws.amazon.com/](http://aws.amazon.com/)

{{ page.date | date_to_string }}





