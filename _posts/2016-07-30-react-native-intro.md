---
layout: article
title: 😱 Introduction to React Native

---
# {{ page.title }}

### Abstract

When it comes to developing mobile apps most people might think about Xcode with objective C for iOS, and Eclipse and Java for android. And a lot of time is being spend doing the same thing just in two different languages, which is really a waste of time. This is where React Native comes into play.

Good thing about React Native is you are writing your app in Javascript. And the development is pretty much just like what you'd have done when you develop a website. It basically assumes the react-flux structure for you and you only need to develop reusable React components for you app. There are also other frameworks that enables you to develop an app in Javascript (such as PhoneGap). But React Native gets a lot more attention and community support so it has become a very power tool in developing mobile applications nowadays.

### Preparation (iOS)

There are a lot of tutorials online to teach you how to do this. Basically you only need to:

```
* install Xcode
* install npm
* install react-native
* `react-native init SampleProjectHelloWorld`
```

And that's all. You would have a project with entry `index.ios.js` and project name `SampleProjectHelloWorld`

### Development (iOS)

The entry point for the project is `index.ios.js`. And in the `render()` method is the React component that you want your users to see.

There are some basic React Native components that I use frequently.

- Image - it's just like a <img/> in a webpage
- ListView - it displays a list
- Navigator - this gives you transition between scenes in your app.
- ScrollView - so that you can scroll your viewport
- View - you can specify the height, width, color and it's in a way like a `<div />`
- TouchableOpacity - this helps you handle `click` events

### Useful 3rd party modules

Take `react-native-maps` for example. Basically you simply `npm install react-native-maps` into your project. Then you can do

`import MapView from 'react-native-maps';`

To use this `MapView` component to render a map.

In many situations you also need to import libraries into your project. You need to link the libraries before you can use this module in the project. You can either install `rnpm` and do `rnpm link` to link the libraries, or you can link the libraries through Xcode by yourself.

* [Intro on linking libraries](https://facebook.github.io/react-native/docs/linking-libraries-ios.html)

### Integrate existing objective C modules into your react native app.

I'll have a more detailed post on this.

* [integrate existing objective C apps to react native apps](http://ssmlee04.github.io/blog/2016/07/31/integrate-objective-c-into-react-native-apps.html)

--

references:

* [React Native Tutorial: Building Apps with JavaScript](https://www.raywenderlich.com/126063/react-native-tutorial)
* [How To Easily Make Your Objective-C Code Work With React Native](https://devdactic.com/objective-c-code-react-native/)

{{ page.date | date_to_string }}
