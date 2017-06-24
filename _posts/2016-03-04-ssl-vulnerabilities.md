---
layout: article
title: SSL vulnerabilities
---
# {{ page.title }}

SSLv3 has a vulnerability against POODLE attack. SSLv2 has a vulnerability against DROWN attack (discovered around Feb 2016).

![http://i.stack.imgur.com/1iyvC.png](http://i.stack.imgur.com/1iyvC.png)

The best practice is to disable SSL v3 when starting an https server as follows: 

```
https.createServer({
  //
  // This is the default secureProtocol used by Node.js, but it might be
  // sane to specify this by default as it's required if you want to
  // remove supported protocols from the list. This protocol supports:
  //
  // - SSLv2, SSLv3, TLSv1, TLSv1.1 and TLSv1.2
  //
  secureProtocol: 'SSLv23_method',

  //
  // Supply `SSL_OP_NO_SSLv3` constant as secureOption to disable SSLv3
  // from the list of supported protocols that SSLv23_method supports.
  //
  secureOptions: constants.SSL_OP_NO_SSLv3,

  cert: fs.readFileSync(path.join(__dirname, 'ssl', '123.crt')),
  key: fs.readFileSync(path.join(__dirname, 'ssl', '123.key')),
}, function (req, res) {
  res.end('works');
}).listen(443);
```

how to check if your sslv3 is disabled?

```
$ openssl s_client -ssl3 -connect localhost:443
```

if the response is something like this then you're good to go.

```
7895:error:1409E0E5:SSL routines:SSL3_WRITE_BYTES:ssl handshake failure:/SourceCache/OpenSSL098/OpenSSL098-52/src/ssl/s3_pkt.c:546:
```

If we connect normally, it will just work:

```
$ openssl s_client -connect localhost:443
```

Anyways just make sure your server supports as little connection protocals as possible so that you don't need to worry about those things.

--

references:

* [https://gist.github.com/3rd-Eden/715522f6950044da45d8](https://gist.github.com/3rd-Eden/715522f6950044da45d8)

{{ page.date | date_to_string }}
