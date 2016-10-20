---
layout: default
title: Cloudfront configurations
---
# {{ page.title }}

### Synopsis

Most of the time you will have a resource available somewhere, say S3, and by setting up rules in Cloudfront you can let Cloudfront to push your S3 bucket to get closer to your clients and make a cache there so people will have faster access to those resources.

Cloudfront is widely used as a CDN service to map resources.  It can also be used to setup redirects / restrictions on your resources.  For example, you can make domain1.com/apis1 to redirect to domain2.com and domain1.com/apis2 to redirect to domain3.com. 

The following is one work flow I was previously working on:

### Use Cloudfront as CDN

Likely you will some static files in one S3 bucket. Say `bucket.s3.amazonaws.com`. And then you can create a Cloudfront distribution with something like this:

![http://i.stack.imgur.com/DO6GM.png](http://i.stack.imgur.com/DO6GM.png)

You can select 'Restrict Bucket access' to make sure people can get those assets from Cloudfront only. 

![http://i.stack.imgur.com/Xrf2g.png](http://i.stack.imgur.com/Xrf2g.png)

You can choose your price classes. Use All Edges means the cached resource will be pushed to all edges of the world. 

Alternate Domain Names (CNAMEs).  if you want the links to be `xxx.domain.com` instead of `xxx.cloudfront.com` you can fill in this field and configure your own DNS settings to redirect resources to endpoint here.  If this is the case and if you also happen to use `https` you will have to privide your own SSL certificate. 

Default Root Object could be index.html or anything. 

<font color='red'>P.S: The files in your origin must be publicly readable</font>

### Use Cloudfront to redirect requests

A distribution can have multiple origins. Anyways you can create origins here. 

![http://i.stack.imgur.com/9n0da.png](http://i.stack.imgur.com/9n0da.png)

And then you can specify the behaviors of the origin as I mentioned above. You can redirect domain1.com/apis to domain2.com. You can set viewer behavior as HTTPS only. You can set Forward Headers to avoid CORS problems.  Things like that.

--

references:

* [https://aws.amazon.com/cloudfront/](https://aws.amazon.com/cloudfront/)

{{ page.date | date_to_string }}
