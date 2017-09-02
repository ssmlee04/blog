---
layout: article
title: Node.js related questions
interview: true
---
# {{ page.title }}

### Explain how garbage collection in V8 works

Why is garbage collection expensive? The V8 JavaScript engine employs a stop-the-world garbage collector mechanism. In practice, it means that the program stops execution while garbage collection is in progress.
