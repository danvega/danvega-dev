---
slug: "start-using-vue3-today"
title: "Start using Vue 3 in a new project right now"
date: "2020-01-17T13:58:29.936Z"
published: true
excerpt: "In this tutorial, I walk you through how to add Vue 3 to a new project."
author: "Dan Vega"
tags:
  - "vue3"
  - "screencast"
cover: "./start-using-vue3-today-cover.png"
video: "https://www.youtube.com/embed/o-jiS563yI8"
---

So you've heard of Vue 3 and you want to start playing around with it but not sure where to start. Did you know that you can add Vue 3 to a new project using the Vue CLI? In this tutorial, I will show you how to create a new project using the Vue CLI and then using a new plugin, add Vue 3 Alpha to your project.

With Vue 3 installed we will walk through creating a new component using the Composition API. We will start by creating a simple Counter component and it might be a trivial example it does allow you to see the building blocks of Vue's new Composition API.

## Sample Code

```shell
# create a Vue 2 project using the Vue CLI
vue create hello-vue3-sfc
# in an existing Vue CLI project
vue add vue-next
```

### App.vue

```vue
<template>
  <div id="app">
    <counter></counter>
  </div>
</template>

<script>
import Counter from './components/Counter.vue';

export default {
  name: "app",
  components: {
    Counter
  }
};
</script>
```

### Counter.vue

```vue
<template>
  <button @click="increment">
    Count: {{ state.count }} Double {{ state.double }}
  </button>
</template>

<script>
import { reactive, computed } from 'vue';

export default {
  setup() {
    const state = reactive({
      count: 0,
      double: computed(() => state.count * 2)
    });
    function increment() {
      state.count++;
    }
    return { state, increment };
  }
};
</script>
```

## Resources

- https://github.com/vuejs/vue-next
- https://github.com/vuejs/vue-next-webpack-preview
- https://github.com/vuejs/vue-cli-plugin-vue-next
