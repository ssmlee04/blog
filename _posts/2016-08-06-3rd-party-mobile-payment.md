---
layout: article
title: 3rd party payment system integration

---
# {{ page.title }}

### Abstract

It has become very common to purchase stuff online nowadays. Instead of paying directly to the seller such as doing ATM transfers or cash transfers many people choose to pay to a third party payment processing vendors such as Paypal or Stripe.

In this case I'd like to introduce how to integrate with Stripe (when you pay with USD) or Pay2Go (when you pay in TWD).

#### Pay2go

Pay2go gives you an API secret. Upon receiving the client payment request you can generate a payment record with the API secret, serialize the data, encrypt the transaction and generate a unique payment url. User can open this url to confirm the payments using their preferred payment method. It is great because, in this case, Pay2go will take care of the security issues and we only need to verify the transaction status changes.

![Pay2go](http://i.stack.imgur.com/7c3iy.png)

#### Stripe

You can include their SDK on your website. And ask use to convert a credit card number into a token, and then client can send this token to the server and server can sent this encrypted token to Stripe for payment processing. Since you don't really see the user's sensitive info you don't need to worry about leaking them.

![](http://startupbeat.hkej.com/wp-content/uploads/2015/07/stripe.png)

[](https://github.com/stripe/stripe-node)

#### Paypal

Paypal is good but it's really expensive. I don't really have a chance to integrate it.

### Things to watch out when you're integrating payments into your system

* NEVER ask any sensitive data from your users. It's just wrong.
* Use two-phase commits. Don't charge them twice and get a dispute.
* Backup your db regularly.

--

references:

{{ page.date | date_to_string }}
