---
layout: default
title: Nginx configs
---
# {{ page.title }}

The current setting for my app is there are 2 websites listening on port 3030 and 3031. Both website send requests to the API server. Website on 3030 renders normal websites and 3031 renders mobile website. But all incoming request are from port 80 so you have to use nginx to proxy requests to websites on corresponding ports.

I configured my website by route 53 to redirect to clearstreet.io when the request is from www.clearstreet.io.  Also redirect to mobile site m.clearstreet.io when the screen size is smaller than some number using Javascript. 

![](http://i.stack.imgur.com/MY2aX.png)

Also I Inject the following code to website: 

```
window.mobileAndTabletcheckAndRedirect = function() {
  var check = false;
  if( navigator.userAgent.match(/Android/i)
   || navigator.userAgent.match(/webOS/i)
   || navigator.userAgent.match(/iPhone/i)
   || navigator.userAgent.match(/iPad/i)
   || navigator.userAgent.match(/iPod/i)
   || navigator.userAgent.match(/BlackBerry/i)
   || navigator.userAgent.match(/Windows Phone/i)
  ) check = true;
  if (check) {
    window.location.href = "https://m.clearstreet.io"
  }
}();
```

This way when the request is from a mobile device it will redirect to mobile website. 

The following is the nginx setting that I use to proxy requests from 80 to 3030 or 3031 based on the subdomain name. 

```
server {
  listen 80;
  server_name m.clearstreet.io;

  location / {
    proxy_pass http://127.0.0.1:3031;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_connect_timeout 150;
    proxy_send_timeout 100;
    proxy_read_timeout 100;
    proxy_buffers 4 32k;
    client_max_body_size 8m;
    client_body_buffer_size 128k;
  }
}

server {
  listen 443 ssl;
  server_name m.clearstreet.io;

  ssl_certificate /xxx/yyy/zzz/server.crt;
  ssl_certificate_key /xxx/yyy/zzz/server.key;

  location / {
    proxy_pass https://127.0.0.1:8081;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_connect_timeout 150;
    proxy_send_timeout 100;
    proxy_read_timeout 100;
    proxy_buffers 4 32k;
    client_max_body_size 8m;
    client_body_buffer_size 128k;
  }
}

server {
  listen 80;
  server_name  clearstreet.io;

  #charset koi8-r;
  #access_log  logs/host.access.log  main;

  location / {
    proxy_pass http://127.0.0.1:3030;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
      #root   html;
      #index  index.html index.htm;
  }
}

server {
  listen 443 ssl;
  server_name  clearstreet.io;

  ssl_certificate /xxx/yyy/zzz/server.crt;
  ssl_certificate_key /xxx/yyy/zzz/server.key;

  #charset koi8-r;
  #access_log  logs/host.access.log  main;

  location / {
    proxy_pass https://127.0.0.1:8080;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
      #root   html;
      #index  index.html index.htm;
  }
}
```

The tricky part is when the requests is through https nginx will need to specify the ssl parameters.

--

references:

* [http://nginx.org/en/docs/http/configuring_https_servers.html](http://nginx.org/en/docs/http/configuring_https_servers.html)
* [https://en.wikipedia.org/wiki/Reverse_proxy](https://en.wikipedia.org/wiki/Reverse_proxy)

{{ page.date | date_to_string }}
