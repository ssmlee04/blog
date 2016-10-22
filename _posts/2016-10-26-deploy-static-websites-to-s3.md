---
layout: article
title: Deploy static websites to S3
---
## {{ page.title }}

#### Deploying a static website to S3

S3 is a service for you to to store objects in the cloud. You can store any kind of data. You can also host your websites on S3 simply by storing index.html or something there. 

![](https://i.stack.imgur.com/QzOlJ.png)

First of all, you would need to create a bucket for hosting your website. And then you have to set the permissions so that anyone else can see the contents in the bucket. 

Since we are also trying to let CI take care of deployment for us, we also need to configure the bucket policies so that a specific user `ci-uploader` can list the contents in the bucket and read / write objects in it.

#### Sample CircleCI scripts uploading to S3

```
#!/usr/bin/env bash
BUCKET=www.example.com
DIR=dist/prod/
aws  s3  sync $DIR s3://$BUCKET/ --region us-west-2
```

On CircleCI you have to add the aws user credentials in the project settings. 

You can also run the scripts on your local machine. Once you installed aws-cli on your machine and pre-configure your environment variables AWS_ACCESS_KEY, AWS_SECRET_KEY so that aws-cli would do the things on hehalf of the intended user. 


--

references:

* [Deploying static sites to S3 with Circle CI](http://benlopatin.com/deploying-static-sites-circle-ci/)

{{ page.date | date_to_string }}
