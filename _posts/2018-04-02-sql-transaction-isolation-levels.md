---
layout: article
title: 😀 Sql isolation levels
---
# {{ page.title }}

### A very good explaination of isolation levels

For example, you have 3 concurrent process A, B and C. A starts a transaction, writes data and commit/rollback (depending on results). B just executes a SELECT statement to read data. C reads and updates data. All these process work on same table T.

- READ UNCOMMITTED - no lock on table. You can read data in the table while writing on it. This means, A writes data (uncommited) and B can read this uncommited data and use it (for any purpose). If A executes a rollback, B still has read the data and used it. This is the fastest but most insecure way to work with data since can lead to data holes in not physically related tables (yes, two tables can be logically but not physically related in real world apps).
- READ COMMITTED - lock on committed data. You can read the data that was only commited. This means, A writes data and B can't read the data saved by A until A executes a commit. The problem here is that C can update data that was read and used on B and B client won't have the updated data.
- REPEATABLE READ - lock on block of sql(which is selected by using select query). This means, B reads the data under some condition i.e. WHERE aField > 10 AND aField < 20, A inserts data where aField value is between 10 and 20, then B reads the data again and get a different result.
- SERIALIZABLE - lock on full table(on which Select query is fired). This means, B reads the data and no other transaction can modify the data on the table. This is the most secure but slowest way to work with data. Also, since a simple read operation locks the table, this can lead to heavy problems on production: imagine that T table is an Invoice table, user X wants to know the invoices of the day and user Y wants to create a new invoice, so while X executes the read of the invoices, Y can't add a new invoice (and when it's about money, people get really mad, specially the bosses).

--

references:

* [http://stackoverflow.com/questions/4034976](http://stackoverflow.com/questions/4034976)
* [https://stackoverflow.com/a/16162426/1355175](https://stackoverflow.com/a/16162426/1355175)
{{ page.date | date_to_string }}
