---
layout: article
title: How do computers work
---
# {{ page.title }}

### How does threads and stacks work

The stack is attached to a thread, so when the thread exits the stack is reclaimed.

The size of the stack is set when a thread is created. The size of the heap is set on application startup, but can grow as space is needed.