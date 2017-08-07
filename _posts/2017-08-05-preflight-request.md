---
layout: article
title: CORS preflight request
---
# {{ page.title }}

A CORS preflight request is sent prior to the actual request to see if a HTTP method can be understand. 

It is an OPTIONS request using two HTTP request headers: `Access-Control-Request-Method` and `Access-Control-Request-Headers`, and the Origin header.

A preflight request is automatically issued by a browser when needed

GET/POST requests without any custom headers don't need a preflight, since these requests were already possible before CORS. But any request with custom headers, or PUT/DELETE requests, do need a preflight. 

--

references:

* [https://developer.mozilla.org/en-US/docs/Glossary/Preflight_request](https://developer.mozilla.org/en-US/docs/Glossary/Preflight_request)
* [https://stackoverflow.com/questions/15381105/cors-what-is-the-motivation-behind-introducing-preflight-requests](https://stackoverflow.com/questions/15381105/cors-what-is-the-motivation-behind-introducing-preflight-requests)

{{ page.date | date_to_string }}
