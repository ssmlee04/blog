---
layout: article
title: 😱 Backend comparison between express.js, hapi.js, parse.com
---
## {{ page.title }}

I’ve been working for the backend structure for my company for a while and we are thinking about porting the backend service to a new one recently.

We have setup an express.js server for our website, mobile apps and the desktop apps since 2012. At the time the server is written even MEAN is not a common framework and we simply put together a very raw model using express.js and some dependency injection modules.  We also tapped into require.js and came up with something very crude.  Tt has become a lot more difficult to maintain the code and dur to the need for new functionalities such as text messages or push notifications we decided that it’s time to re-write the backend server.

Our goal is to setup a RESTful backend for the web, mobile and desktop apps. There are a few references that we are thinking about.  1. Parse.com, 2. hapi.js or 3. continue with the original express.js with added features.

### parse.com

We studied Parse.com and realized it’s good for putting together a MVP. It takes care of basic db schemas and user authentication for you so you don't have to worry about setting up the mongodb connections and stuff.  But for larger and more complex backends it has limitations such as the following:

* Migration: import db to parse.com is by using csv files. (But I haven’t seen exactly where to do this..)  Export db by downloading a zip file. My concern is when db is large you will have huge difficulty doing migration.
* Pricing: Free for less than 30 requests/s and 20 GB.  When you need more requests / db storage the fee increases significantly.  (The most expensive db storage I have seen among cloud service providers) Push notification is also 50 times more expensive than AWS SNS after 1m push notifications per month.
* Limited documentation: 17000 stars for express.js and 4500 stars for hapi.js.  The cloest thing I see is https://github.com/ParsePlatform/ParseReact.  (But actually most of the code is frontend code.. ) Parse.com seems to me is only for really easy mongodb setup with push notifications and the main focus might be mobile projects aiming at MVP…
* Ease of db manipulation: I haven’t found a console on the db page.  Previously I used robomongo and it’s very easy to query, update, remove data with the console to track stuff.  Also there are situations I have to do createIndex: unique, dropDups operation.  It seems difficult to test these things with parse.com web db console. Also I haven’t found where you can do db indexing… (I researched a lot and seem you would need to use a beforeSave validator to enforce uniqueness. So you’re basically sacrificing flexibility with ease of push notifications, authentication and db setup..)

### Hapi.js

There are articles about the pros and cons of hapi.js compared to express.js.  There are cool things about hapi.js such as server caching on specific routes. But even that there are modules for express such as 'route-cache' that you can do route caching.  The biggest cons to me is the lack of documentation and references.  Basically hapi.js is working fine when you want to setup a http server.  But if you look through github or stackoverflow you will see very little resources about hapi projects.

### Express.js

There are so many mature projects such as mean.io, mean.js, meteor, ...etc that wraps and express server and separates the app to small modules.  This way it's very easy for a group of people to work on different modules of the same app.  And you can also probably use git submodule or subtree to combine the works this way.  Also if you follow the *standard* way those big projects do you should be able to configure your express server without problems. And if you really bump into problems you can find tons of resources on github / stackoverflow.

For me the long term maintainability and the ease of coding of a project is the most important thing.  And once your website passes a certain threshold (like 10000 users or 15 requests/s) we can then use hapi.js or something else but for now I guess express server is enough for us.

{{ page.date | date_to_string }}





