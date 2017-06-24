---
layout: article
title: 3rd party payment system integration

---
# {{ page.title }}

### Abstract

It has become very common to purchase stuff online and pay using a 3rd party payment processing vendor. In this case I'd like to introduce how to integrate with Stripe (when you pay with USD) or Pay2Go (when you pay in TWD). 

### Pay2go

Pay2go provides an API secret. You can generate a payment record and, with the API secret, you serialize the data, encrypt it and generate a unique payment address. User can open this page to confirm the payments. It is great because, in this case, Pay2go will take care of the security issues and we only need to verify the transaction status and change db entries accordingly. 

![Pay2go](http://i.stack.imgur.com/7c3iy.png)

### Stripe

You can include their SDK on your website. And ask use to convert a credit card number into a token, and then you can relay this token and sent to Stripe for payment processing or checking. Since you don't really see the user's sensitive info you don't need to worry about leaking them. 

### Things to watch out when you're integrating payments into your system

* Dont ask sensitive data from your users and send to your server even if it's through HTTPS. It's just really unsecure. 
* Racing conditions. You can simply put all the sql transactions in a queue to get rid of double-pay and such.
* Backup your db regularly. 

--

references:

{{ page.date | date_to_string }}
