### Explain sql joins

![](https://i.stack.imgur.com/1UKp7.png)

### How do use `Explain` syntax

In MySQL you can use EXPLAIN in front of your SELECT statement to see if your query will make use of any index.

### How do you index a field

Index on fields that you care about. Index on integer fields is better than indexing on string fields.

### Why shouldn't you index on all fields

### Explain the transaction isolation levels with locks

I want to understand the lock each transaction isolation takes on the table
For example, you have 3 concurrent process A, B and C. A starts a transaction, writes data and commit/rollback (depending on results). B just executes a SELECT statement to read data. C reads and updates data. All these process work on same table T.

- READ UNCOMMITTED - no lock on table. You can read data in the table while writing on it. This means, A writes data (uncommited) and B can read this uncommited data and use it (for any purpose). If A executes a rollback, B still has read the data and used it. This is the fastest but most insecure way to work with data since can lead to data holes in not physically related tables (yes, two tables can be logically but not physically related in real world apps).
- READ COMMITTED - lock on committed data. You can read the data that was only commited. This means, A writes data and B can't read the data saved by A until A executes a commit. The problem here is that C can update data that was read and used on B and B client won't have the updated data.
- REPEATABLE READ - lock on block of sql(which is selected by using select query). This means, B reads the data under some condition i.e. WHERE aField > 10 AND aField < 20, A inserts data where aField value is between 10 and 20, then B reads the data again and get a different result.
- SERIALIZABLE - lock on full table(on which Select query is fired). This means, B reads the data and no other transaction can modify the data on the table. This is the most secure but slowest way to work with data. Also, since a simple read operation locks the table, this can lead to heavy problems on production: imagine that T table is an Invoice table, user X wants to know the invoices of the day and user Y wants to create a new invoice, so while X executes the read of the invoices, Y can't add a new invoice (and when it's about money, people get really mad, specially the bosses).

[http://stackoverflow.com/questions/4034976/difference-between-read-commit-and-repeatable-read](http://stackoverflow.com/questions/4034976/difference-between-read-commit-and-repeatable-read)

### What is a trigger

Triggers are database callback functions, which are automatically performed/invoked when a specified database event occurs.

INSERT, UPDATE or DELETE trigger
