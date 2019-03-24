---
layout: article
title: 😀 Setup reverse proxy using Nginx
---
# {{ page.title }}

We used Cloudfront as CDN and reverse proxy for our services in AWS global region. A very standard reverse proxy is to use Route53, S3 and Cloudfront. However, when we are deplying our services in AWS China we were amazed that Cloudfront does not exist there.

A basic reverse proxy architecture with Route53, S3 and Cloudfront look like this:

![](https://image.slidesharecdn.com/awssummit2017gsneotek-170425054543/95/route53-cloudfront-cdn-aws-summit-seoul-2017-21-638.jpg?cb=1493101693)

Luckily, the most intuitive (and one of the cheapest) way is to setup an EC2 instance running nginx as a reverse proxy for our server.

### Installation

[](https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-16-04)

Basically just do something like this

### Configurations

inside `/etc/ngingx/sites-available/default`

Say your API server is at `123.123.123.123:80`

```
# for reverse proxy serving at endpoints /apis
location /apis/ {
  proxy_pass http://123.123.123.123:80;
}

# for reverse proxy serving at endpoints /apidocs
location /apidocs/ {
  proxy_pass http://123.123.123.123:80;
}

location / {
  resolver 8.8.8.8;

  # we redirect all requests to S3 static website hosting
  set $bucket "xxx.s3-website.ap-north-1.amazonaws.com";

  # matches: branch-name.repository-name
  if ($host ~ ^([^.]*)\.([^.]*)\.exiosi\.cn) {
    set $branch $1;
    set $repo $2;
    proxy_pass http://$bucket/${repo}/${branch}${uri};
  }

  # matches: repository-name
  if ($host ~ ^([^.]*)\.exiosi\.cn$) {
    set $repo $1;
    proxy_pass http://$bucket/${repo}/master${uri};
  }

  # matches: everything else, point to the bucket
  proxy_pass http://$bucket;

  proxy_intercept_errors on;
  proxy_redirect off;
  proxy_set_header Host $bucket;
  proxy_set_header X-Real-IP $remote_addr;
  proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  proxy_hide_header x-amz-id-2;
  proxy_hide_header x-amz-request-id;
}


```

### HTTPS

...

### Miscellaneous

Nginx have a low default acceptible request body size. This comes intuitively as it`s a proxy and you'd expect all the traffic inflow and outflows go through it and very quickly.

In case you want your nginx to handle a higher request size, changes the config as follows:

```
client_max_body_size 2M;
```

--

references:

* [Setting up a reverse proxy](https://singlebeep.com)
* [Deploying Static Websites to AWS S3 Behind an Nginx Proxy](http://cognition.happycog.com/article/deploying-static-websites-to-aws-s3-behind-an-nginx-proxy)

{{ page.date | date_to_string }}