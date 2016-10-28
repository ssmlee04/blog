---
layout: article
title: Setup reverse proxy using nginx
---
# {{ page.title }}

We used Cloudfront as CDN and reverse proxy for our services in AWS
global. However, when we are deplying our services in AWS China we
were amazed that Cloudfront does not exist over there.

A very standard reverse proxy flow with Route53, S3 and Cloudfront
looks like this:

![](https://assets-cdn.github.com/images/modules/logos_page/Octocat.png)

However, this does not work there and we have to figure out solutions
in China. Luckily, the most intuitive (and one of the cheapest) way is
to setup an EC2 instance running nginx as a reverse proxy for our
server.



### inside /etc/ngingx/sites-available/default

Say your API server is at 123.123.123.123:80

```
# for reverse proxy serving at endpoints /apis
location /apis/ {
  proxy_pass http://123.123.123.123:80;
}

# for reverse proxy serving at endpoints /apidocs
location /apidocs/ {
  proxy_pass http://123.123.123.123:80;
}
```

### https

...

### Miscellaneous

Nginx have a low default acceptible request body size. This comes
intuitively as it`s working as a proxy and you'd expect all the
traffic inflow and outflows go through it.

```
client_max_body_size 2M;
```

--

references:

* [Setting up a reverse proxy](https://singlebeep.com)

{{ page.date | date_to_string }}