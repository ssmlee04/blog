---
layout: article
title: 😀 HTTP/1.1 Upgrade header
---
# {{ page.title }}

## Abstract

The Upgrade header field is a HTTP header field introduced in HTTP/1.1. In the exchange, the client begins by making a cleartext request, which is later upgraded to a newer http protocol version or switched to a different protocol.

### Use cases:

- WebSocket uses this mechanism to set up a connection with a HTTP server in a compatible way.
- HTTP/2 uses this to setup a compatible HTTP connection. 

--

references:

* [Wikipedia](https://en.wikipedia.org/wiki/HTTP/1.1_Upgrade_header)

{{ page.date | date_to_string }}
