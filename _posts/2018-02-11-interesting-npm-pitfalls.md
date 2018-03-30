---
layout: article
title: 😀 Interesting npm pitfalls
---
# {{ page.title }}

### Overriding existing commands:

You can specify in package.json some aliases and accidentally overwrite some system commands.

### Infinite loops:

When you have in your package.json with something like this: 

```js
{
  "name": "how-to-mess-up",
  "scripts": {
    "install": "npm i -g how-to-mess-up"
  }
}
```

--

references:

* [https://github.com/ThomasCrevoisier/how-to-mess-up-with-npm](https://github.com/ThomasCrevoisier/how-to-mess-up-with-npm)

{{ page.date | date_to_string }}
