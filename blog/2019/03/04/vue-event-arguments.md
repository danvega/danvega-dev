---
title: Vue Event Handler Arguments
slug: vue-event-arguments
date: 2019-03-04 10:00:00
published: true
excerpt: In this article you are going to learn how to pass arguments to your Vue event handlers as well as how get access to the original DOM event.
author: Dan Vega
tags: vue,javascript
cover: ./vue-event-arguments.png
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
    <a href="#" id="increase" class="btn">Increase</a>
    <a href="#" id="decrease" class="btn">Decrease</a>
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
    padding: 12px;
    font-size: 13px;
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
    <a href="#" id="increase" class="btn" v-on:click="">Increase</a>
    <a href="#" id="decrease" class="btn" v-on:click="">Decrease</a>
  </div>
</template>
```

> There is a shorthand for the v-on: directive which is to just use the colon followed by the name of the event. In this case the directive `:click=""` does the exact same thing as the longer format. For the rest of this demo I will be using the long version.

The code that you place inside of the parenthesis is the code that you will run when that event is fired.

## Method Event Handlers

The first thing you need to do is setup some initial data. In the script block create an instance variable called counter and set it to zero.

```javascript
<script>
export default {
  name: "app",
  data() {
    return {
      counter: 0
    };
  }
};
</script>
```

In the template you are going to add some text and using data binding you are going to display the value of counter.

```html
<template>
  <div id="app">
    <a href="#" id="increase" class="btn" v-on:click="">Increase</a>
    <a href="#" id="decrease" class="btn" v-on:click="">Decrease</a>
    <p>The button was clicked {{ counter }} times</p>
  </div>
</template>
```

### Inline Event Handlers

Now that you know how to declare an event handler you need to write some code that will execute when that event is triggered. You can write this code inside of the parenthesis (inline) or you can declare a function to handle it. For basic operations writing inline code will work and here all you want to do is increase or decrease the value of the variable counter.

```html
<div id="app">
  <a href="#" id="increase" class="btn" v-on:click="counter += 1">
    Increase
  </a>
  <a href="#" id="decrease" class="btn" v-on:click="counter -= 1">
    Decrease
  </a>
  <p>The button was clicked {{ counter }} times</p>
</div>
```

### Method Event Handlers

You will quickly find out that logic for most of your event handlers is more complex and for those cases we can call a method. The `v-on` directive will take the name of a method that will be called when the event is fired. In the followed code you are moving the logic from inline to a method.

```vue
<template>
  <div id="app">
    <a href="#" id="increase" class="btn" v-on:click="increase">Increase</a>
    <a href="#" id="decrease" class="btn" v-on:click="decrease">Decrease</a>
    <p>The button was clicked {{ counter }} times</p>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      counter: 0
    };
  },
  methods: {
    increase() {
      this.counter += 1;
    },
    decrease() {
      this.counter -= 1;
    }
  }
};
</script>
```

The program will function the same but now you have extracted it into a program where it could contain more complex operations if needed.

## Event Handler Arguments

While this program works just fine it seems like we can simplify it. All the increase or decrease methods do is change the variable counter. You could write a single method to handle the logic for this method. Just like any other method in JavaScript you can pass arguments to it. Here you are calling `updateCounter()` for both buttons but passing the value of 1 for increase and -1 for decrease.

```vue
<template>
  <div id="app">
    <a href="#" id="increase" class="btn" v-on:click="updateCounter(1)"
      >Increase</a
    >
    <a href="#" id="decrease" class="btn" v-on:click="updateCounter(-1)"
      >Decrease</a
    >
    <p>The button was clicked {{ counter }} times</p>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      counter: 0
    };
  },
  methods: {
    updateCounter(operand) {
      this.counter += operand;
    }
  }
};
</script>
```

Just like any other method you can pass whatever arguments are needed to this method.

### Implicit Event Argument

Looking at this method I can't help but think we are be a little explicit here. You know that the increase button will increase the counter by 1 and the decrease button will decrease the counter by 1. If that is the case why do you need to pass that variable to the method.

In vanilla JavaScript you have access to the original DOM event. From there you can determine where the event was originated from. In Vue the original DOM event is implicitly passed if there are no arguments to the method. This means that in our `updateCounter()` method you can declare an argument called event (or whatever you want for that matter) and the event will be passed in. With the original event we can get the id of the button using `event.target.id` and determine if we are increasing or decreasing the value of counter.

```vue
<template>
  <div id="app">
    <a href="#" id="increase" class="btn" v-on:click="updateCounter"
      >Increase</a
    >
    <a href="#" id="decrease" class="btn" v-on:click="updateCounter"
      >Decrease</a
    >
    <p>The button was clicked {{ counter }} times</p>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      counter: 0
    };
  },
  methods: {
    updateCounter(event) {
      this.counter += event.target.id === "increase" ? 1 : -1;
    }
  }
};
</script>
```

### Explicit Event Argument

What happens when you have arguments that you need to pass to your method but you also need access to the original DOM event? In that case there is a special variable `$event` that you can pass.

```html
<template>
  <div id="app">
    <a href="#" id="increase" class="btn" v-on:click="updateCounter(1,$event)"
      >Increase</a
    >
    <a href="#" id="decrease" class="btn" v-on:click="updateCounter(-1,$event)"
      >Decrease</a
    >
    <p>The button was clicked {{ counter }} times</p>
  </div>
</template>
```

## Conclusion

I realize that most or all of this was pretty basic but I have found that a lot of people didn't know about the implicit event argument. This comes in really handy in many situations so its good to know how to access the original DOM event. If you have any questions about this article and or anything related to Vue please let me know and I will try and answer them, until then...

Happy Coding<br/>
Dan
