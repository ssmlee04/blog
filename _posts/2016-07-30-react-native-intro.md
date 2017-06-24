---
layout: article
title: Introduction to React Native (for iOS)

---
# {{ page.title }}

### Abstract

When it comes to developing mobile apps most people might think about xcode with objective C for iOS, and eclipse and Java for android. And all of a sudden things are new to you and you have to learn the most basic stuff from the beginning. This is where React Native comes into play. 

Good thing about React Native is you are writing your app in Javascript. And the development is pretty much just like what you'd have done when you develop a website. It basically assumes the react-flux structure for you and you only need to develop reusable React components for you app. There are also other frameworks that enables you to develop an app in Javascript (such as PhoneGap). But unlike those platforms, React Native is working more smoothly and efficiently, where the React part is mainly about creating React components that bridges to your real iOS native components. 

### Preparation to develop an iOS app

There are a lot of tutorials online about how to do this

* install xcode and create a project
* install npm 
* install react-native and related dependencies
* create a project by doing something like `react-native init xxxx`

That's all. You would have a RN project with entry `index.ios.js` and project name `xxxx`

### Development process for iOS

The entry point for the project is `index.ios.js`. And in the `render()` method is the React component that you want your users to see. 

There are some basic React Native components that I use frequently.

* Image - it's just like a <img/> in a webpage
* ListView - it displays a list
* Navigator - this gives you transition between scenes in your app.  
* ScrollView - so that you can scroll your viewport
* View - you can specify the height, width, color and it's in a way like a `<div />`
* TouchableOpacity - this helps you handle `click` events

### Importing 3rd party React native modules

Take `react-native-maps` for example. Basically you simply `npm install react-native-maps` into your project. Then you can do 

`import MapView from 'react-native-maps';`

To use this `MapView` component to render a map. 

In many situations you also need to import libraries into your project. Take `react-native-camera` for example. It gives you a `<Camera />` component that does a lot more than a simple react native `CameraRoll`. And you need to link the libraries before you can use everything in this module. You can either do `rnpm link` or you can do the linking through xcode by yourself. 

* [Intro on linking libraries](https://facebook.github.io/react-native/docs/linking-libraries-ios.html)

### Integrate existing objective C modules into your react native app. 

I'll have a more detailed post on this.  

* [integrate existing objective C apps to react native apps](http://ssmlee04.github.io/blog/2016/07/31/integrate-objective-c-into-react-native-apps.html)

--

references:

* [React Native Tutorial: Building Apps with JavaScript](https://www.raywenderlich.com/126063/react-native-tutorial)
* [How To Easily Make Your Objective-C Code Work With React Native](https://devdactic.com/objective-c-code-react-native/)

{{ page.date | date_to_string }}
