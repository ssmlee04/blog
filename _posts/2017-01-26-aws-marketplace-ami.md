---
layout: article
title: Some useful git commands and configurations
---
## {{ page.title }}

### EC2 build for AWS marketplace

Before when we are developing the backend for websites or apps we would use services that scattered across the internet. Like you would use Compose.io for db hosting, Mailgun for sending emails... etc so that you don't need to maintain those services by yourself.

AWS marketplace is working in a different way. Users would use the Amazon Marketplace Images (AMI) to strike up EC2 instances and host their services on their own machines and run our code inside, in this case it would also be more intuitive to let them have preconfigured mongodb or other services installed on the machine and ship altogether. The aim is to make sure the users can run our service as easily as possible and see if this fits their business goals. 

### Things contained in the marketplace dev machine

* flipper (backend API server)
* app (browser environment for exiosi app)
* portal (portal for exiosi app)
* proxy (proxy )

### Procedures to develop marketplace AMIs

We have an instance that's working as our development server. 

### Restrictions on developing marketplace AMI

* You need to disable `root` access to the machine. 
* Remove all user credentials on the machine. 
* AMIs must be in us-east-1 region.
* always keep in mind of the OWASP top 10 vulnerability

### Software changes

* new versions:  If adding a new version, include the ami_id, new version title, release notes and upgrade instructions in an email to AWS
* Metadata change: email AWS staff too.
* Same thing for price and pricing model change.


--

references:

* [https://aws.amazon.com/marketplace/](https://aws.amazon.com/marketplace/)

{{ page.date | date_to_string }}
