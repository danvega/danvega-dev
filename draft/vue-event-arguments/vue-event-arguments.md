---
title: Vue Event Handler Arguments
slug: vue-event-arguments
date: 2019-02-22 10:00:00
published: false
excerpt: In this article you are going to learn how to pass arguments to your Vue event handlers as well as get access to the original DOM event.
author: Dan Vega
tags: vue,javascript
cover: 
---

A fundamental skill in learning JavaScript and Vue is the ability to listen for events and handle them. Events are notifications to code that something interesting has taken place like a user clicking on a button or pressing the enter key. Vue makes event handling incredibly easy and gives us some great features when it comes to event modifiers. 

## Event Handler Project

To get started you are going to setup a new Vue project by running the following command: 

```bash
vue create event-handlers
```

Feel free to accept the defaults while creating this project. The first thing you're going to do is open up `App.vue` and remove the default content in between the `<template></template>` tags. With a empty page you're going to add 2 buttons that we will use as the base for our demo. 

```html
<template>
  <div id="app">
    <a href="#" id="btn1" class="btn">Button 1</a>
    <a href="#" id="btn2" class="btn">Button 2</a>
  </div>
</template>
```

To give our buttons some style add the following css: 

```html
<style>
body {
  margin: 10px;
}
a.btn {
  display: inline-block;
  margin: 10px;
  padding:12px;
  font-size:13px;
  font-weight: 700;
  background-color: rgb(63, 63, 219);
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  border-radius: 4px;
}
</style>
```

## Listening to Events

With your buttons in place we can add an event listener to each. In vanilla JavaScript you would have to get a reference to the element and then add an event listener. In Vue you can use the `v-on` directive to listen to DOM events and run some JavaScript when they're triggered. 

The `v-on` directive is followed by a colon and then the DOM event that you want to listen for. In the case of the example you want to listen for the `click` event so your code would now look like this. 

```html
<template>
  <div id="app">
    <a href="#" id="btn1" class="btn" v-on:click="">Button 1</a>
    <a href="#" id="btn2" class="btn" v-on:click="">Button 2</a>
  </div>
</template>
```

> There is a shorthand for the v-on: directive which is to just use the colon followed by the name of the event. In this case the directive `:click=""` does the exact same thing as the longer format. For the rest of this demo you will be using the long version.

The code that you place inside of the parenthesis is the code that you will run when that event is fired.

##Method Event Handlers

Inline event handlers
Method handlers

##Event Handler System





-------------------------------


## Event Handler Syntax

In order to learn more about event handler you are going to spend some time creating a few. To get started you are going to create a new Vue project using the Vue CLI. 

```bash
vue create events-demo
```

Next you're going to open up `App.vue` and remove the default content in between the `<template></template>` tags. Next you are going to replace it with the following content. Here you are defining 2 buttons that have the same text but different Id's. 

```html
<template>
  <div id="app">
    <button id="btnOne">My Button</button>
    <button id="btnTwo">My Button</button>
  </div>
</template>
```

### v-on Directive

Now that you have your buttons its time to define an event handler for each of these buttons. The first thing you need to decide is what type of event you're going to listen for and then define a method to handle it. In this case you're going to listen for a click event. 

To add an event handler to an element you're going to use the `v-on` directive. The directive is followed by a colon and the HTML Event that you want to listen for. You can listen for any of the following events: 

* click
* change 
* etc

After you define the v-on directive and the event you want to listen for you will give the name of the method you want to be called inside of the parenthesis. In the following example you are listening for the click event and calling a method called `onClick`.

```html
<template>
  <div id="app">
    <button id="btnOne" v-on:click="">My Button</button>
    <button id="btnTwo" :click="">My Button</button>
  </div>
</template>
```

You might have noticed that the directive on the 2nd button looks a little bit different than the first. That is because the 2nd one is the shorthand for the `v-on` directive. Both work exactly the same and it just becomes a personal preference. 


### Access Modifiers 

You can also use access modifiers. Read more about them here> 


```javascript
<script>

export default {
  name: 'app',
  methods: {
    onClick(event) {
      console.log(event); // THE ORIGINAL DOM EVENT
    },
    sayHello(name,event){
      console.log(name) // Dan
      console.log(event)  // THE ORIGINAL DOM EVENT
    }
  }
}
</script>
```

```html
<template>
  <div id="app">
    <button id="btnOne" :click="onClick">My Button</button>
    <button id="btnOne" :click="onClick">My Button</button>
  </div>
</template>
```

## Event Handler Arguments



I have been writing a lot of examples for our students 


