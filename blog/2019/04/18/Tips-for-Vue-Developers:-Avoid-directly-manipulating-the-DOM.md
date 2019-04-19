---
slug: "Tips-for-Vue-Developers:-Avoid-directly-manipulating-the-DOM"
title: "Tips for Vue Developers: Avoid directly manipulating the DOM"
date: "2019-04-18T20:24:32.502Z"
published: false
excerpt: "In this article I will look at an example of where manipulating the DOM in our components might not be the best approach."
author: "Dan Vega"
tags: ["vue", "javascript"]
cover: "./vue-dom.png"
---

I was working with a student today on a final capstone project and they were having some issues with data binding. When we started digging through the code one thing stuck out to me as a big red flag. There was a checkbox with an id and then a change event handler `toggleStatus()`

```html
<input type="checkbox" id="thecheckbox" @change="toggleStatus" />
```

Before we could even get to the root of the issue I saw some code that looked like this.

```javascript
const isChecked = document.getElementById("thecheckbox");
```

When you're working with Vue you kind of have to forget that you have access to the DOM. The reason I say this is because if you're directly accessing the DOM there is probably a better way to do this. I want to be clear that you're not violating any rules here and nobody is going to yell at you for it but we should think about this problem in another way.

In our toggle status method imagine that you needed to know if that checkbox was checked to determine what action to take. This is a very common process in any application.

```javascript
methods: {
  toggleStatus() {
    const isChecked = document.getElementById('thecheckbox').checked;
    if( isChecked ) {
      // do something
    } else {
      // do something else
    }
  }
}
```

### A Better Approach

A better approach for this is to understand that each instance of this component has its own state. This means that we can bind controls in the component to our data. I am going to refactor our previous example by first creating a variable called isChecked and default it to false. This is because by default I want this checkbox unchecked.

```javascript
data() {
  return {
    isChecked = false
  }
}
```

Now that we have some default state for the checkbox we can use this in our component. You can bind the checkbox checked attribute to the variable `isChecked`. When the component first loads it will be unchecked but is now bound to our variable so any time that it changes our checkbox will be updated.

```html
<input type="checkbox" :checked="isChecked" @change="toggleStatus" />
```

Now in our toggle status method we can just use the components data in our if expression. We can also flip the status of the checkbox by setting it to the opposite of whatever it is currently.

```javascript
methods: {
  toggleStatus() {
    if(this.isChecked) {
      // do sommething
    } else {
      // do something else
    }
    this.isChecked = !this.isChecked;
  }
}
```

## Accessing the DOM using \$refs

What if you absolutely need access to the DOM? There are instances where you might need a reference to an element to perform some type of manipulation. I have seen this come up while working with 3rd party components and when working with parent/child components.

I am going to start with a very simple example but this case where you shouldn't use \$refs. Say you had a button in your component and you wanted to get access to it so you could change the text. You can assign a ref attribute to the button and later get access to it using the `$refs` object.

```html
<button ref="myButton">My Button</button>
```

```javascript
methods: {
  onButtonClick() {
    const btn = this.$refs.myButton;
    btn.innerText = 'New Button Text'
  }
}
```

## Practical example using \$refs in Vue

Again, this isn't the most practical example because we are just doing the same thing we did in our earlier example. As I said earlier you might come across this issue when you're working with parent/child components. For this example let's say that you have a checkout form and in that component, you have a child component called `CustomerForm.vue`.

In our checkout form component, we want to programmatically set the focus of an input in our customer form component. The way we can do this is to assign a ref to our customer form within our checkout form.

```html
<template>
  <div id="checkout">
    <customer-form ref="customer" />
  </div>
</template>
```

In the customer form, we will then assign a ref to the first name input box.

```html
<template>
  <div id="customer-form">
    First Name:
    <input type="text" placeholder="Enter your first name" ref="firstName" />
  </div>
</template>
```

Now in the checkout form in our mounted method, we can focus on the customer form first name input.

```vue
<template>
  <div id="checkout">
    <customer-form ref="customer" />
  </div>
</template>

<script>
import CustomerForm from "@/components/CustomerForm";

export default {
  name: "checkout-form",
  components: {
    CustomerForm
  },
  mounted() {
    this.$refs.customer.$refs.firstName.focus();
  }
};
</script>
```

Just a little note from the [Vue Documentation](https://vuejs.org/v2/guide/components-edge-cases.html#Accessing-Child-Component-Instances-amp-Child-Elements) that you need to be aware of.

> $refs are only populated after the component has been rendered, and they are not reactive. It is only meant as an escape hatch for direct child manipulation - you should avoid accessing $refs from within templates or computed properties.

## Conclusion

I want to stress that you aren't doing anything wrong by accessing the DOM in your Vue application. I just think that in most cases there is a better approach and I hope this example was able to show that. If you know of a good use case for manipulating the DOM directly please reach out to me and let me know.
