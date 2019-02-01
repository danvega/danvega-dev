---
slug: hello-gridsome
title: Hello, Gridsome! 
date: 2019-01-31 10:00:00
published: true
excerpt: A quick write up on why I started a new blog and what I plan to do with it.
tags: vue
cover: ../src/assets/img/blog/gridsome.png
---

-update image to dev.to size


I would like to welcome you to a new side project of mine. I thought I would take this opportunity to tell you about the motivation behind creating this website and the technologies that power it.

## Blogging

a little background on blogging

## Gridsome

Why gridsome?

``` vue
<!-- Counter.vue -->
<template>
  <div>
    <button @click="crement(-1)">-</button> {{ count }}
    <button @click="crement(1)">+</button>
  </div>
</template>

<script>
// Helper function to apply changes to the data
function setData(vm, changes) {
  for (let item in changes) {
    vm[item] = changes[item]
  }
}

export default {
  name: "counter",
  props: {
    reducer: {
      type: Function,
      required: false,
      // Use all the changes by default
      default: (vm, changes) => {
        return {
          ...changes
        }
      }
    }
  },
  data() {
    return {
      count: 0
    }
  },
  methods: {
    crement(amount) {
      // Grab the subset of changes from the user
      // via the reducer prop (i.e. the Data reducer)
      //                      ┌─────this guy
      const changes = this.reducer(this.$data, {
        count: this.count + amount
      })
      // Apply the changes
      setData(this, changes)
    }
  }
}
</script>
```

