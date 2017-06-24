---
layout: article
title: Things to note on Mysql transactions
---
# {{ page.title }}

* Serializable prevents both non-repeatable read and phantom rows (so you can't even INSERT data). That means you can READ and WRITE (SELECT, UPDATE) rows that are not included with serializable transaction, but you can't DELETE OR INSERT rows on TABLE level.

* Repeatable reads: In this isolation level, a lock-based concurrency control DBMS implementation keeps read and write locks (acquired on selected data) until the end of the transaction. However, range-locks are not managed, so phantom reads can occur.

* However, for a distributed transaction, you must use the SERIALIZABLE isolation level to achieve ACID properties. It is enough to use REPEATABLE READ for a nondistributed transaction, but not for a distributed transaction

basically Serializable is the most strict among the 4 modes. 

--

references:

* [http://dev.mysql.com/doc/refman/5.7/en/xa.html](http://dev.mysql.com/doc/refman/5.7/en/xa.html)

{{ page.date | date_to_string }}
