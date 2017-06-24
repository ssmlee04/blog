---
layout: article
title: Some new features in Xcode 8 worth looking into
---
# {{ page.title }}

### Automatic cerificate signing

Xcode 8 introduced a new functionality called automatic managing signing. Previously it's hassle to choose between provisioning profiles to use when build the application. And when you deliver to the app store you have to sign it with yet another provisioning profiles. It's quite complicated. And from Xcode 8 you can let xcode 8 to manage this process for you. So in `Development` and `Ad Hoc` build it would sign the build with `development` provisions. And for `App Store` build it would sign the build with `production` provisions. So basically you don't need to do anything about this area for quite a long time. 

![certification signing screen](http://i.stack.imgur.com/PygI2.png)

--

references:

* [https://developer.apple.com/library/content/documentation/IDEs/Conceptual/AppDistributionGuide/MaintainingProfiles/MaintainingProfiles.html](https://developer.apple.com/library/content/documentation/IDEs/Conceptual/AppDistributionGuide/MaintainingProfiles/MaintainingProfiles.html)
* [https://github.com/ParsePlatform/PushTutorial](https://github.com/ParsePlatform/PushTutorial)

{{ page.date | date_to_string }}
