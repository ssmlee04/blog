---
layout: article
title: 😱 Some notes on Twelve-Factor App
---
# {{ page.title }}

A methodology for building modern, scalable, maintainable software-as-a-service apps.

### 1. Codebase

There is only 1 codebase.

### 2. Dependencies

All the dependencies should be fully-decoupled.

### 3. Configs

you can store configs in environment variables. Environment variables are never grouped together as “environments”, but instead are independently managed for each deploy. This way you won't see env variables like `job_staging_123` which is not scalable and is difficult to manage when the app gets large.

### 4. Backing services

Resources can be attached and detached to deploys at will.

### 5. Build, release, run
### 6. Processes

Processes are stateless and share-nothing. Any data that needs to persist must be stored in a stateful backing service, typically a database.

### 7. Port Binding

Each process would bind to 1 port so that other processes can communicate with it through this port.

### 8. Concurrency
### 9. Disposability

minimum startup time, able to stop anytime

### 10. Dev/prod parity

### 11. Logs

In development environment you output to console, in production you log it to a db or somewhere.

### 12. Admin processes

One-time only code must ship with application code to avoid synchronization issues.


![](https://i.stack.imgur.com/QVbTJ.png)

--

references:

* [https://12factor.net](https://12factor.net)

{{ page.date | date_to_string }}
