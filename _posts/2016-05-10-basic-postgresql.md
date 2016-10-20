---
layout: default
title: Introduction to PostgreSql (pg)
---
# {{ page.title }}

Make sure you install PostgreSQL or later versions. PostgreSQL 9.4 introduces jsonb document types and you can store a JSON like structure in the document.  

PostgreSQL is installed with a default user and default database both called postgres. To connect to the database, first you need to switch to the postgres user by issuing the following command while logged in as root (this will not work with sudo access):

```
su - postgres
```

And then you can type in 

```
$ psql
```

to login to PostgreSQL console.



--

references:

* [https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-9-4-on-debian-8](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-9-4-on-debian-8)

{{ page.date | date_to_string }}
