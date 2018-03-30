---
layout: article
title: CORS preflight request
---
# {{ page.title }}

A CORS preflight request is sent prior to the actual request to see if a HTTP method can be understand.

It is an OPTIONS request using two HTTP request headers: `Access-Control-Request-Method` and `Access-Control-Request-Headers`, and the Origin header.

A preflight request is automatically issued by a browser when needed, i.e when your request is cross origin.

GET/POST requests without any custom headers don't need a preflight, since these requests were already possible before CORS. But any request with custom headers, or PUT/DELETE requests, do need a preflight because there's a chance the server is not able to understand them at all.

--

references:

* [https://stackoverflow.com/a/39736697/1355175](https://stackoverflow.com/a/39736697/1355175)
* [https://developer.mozilla.org/en-US/docs/Glossary/Preflight_request](https://developer.mozilla.org/en-US/docs/Glossary/Preflight_request)
* [https://stackoverflow.com/questions/15381105/cors-what-is-the-motivation-behind-introducing-preflight-requests](https://stackoverflow.com/questions/15381105/cors-what-is-the-motivation-behind-introducing-preflight-requests)

{{ page.date | date_to_string }}
