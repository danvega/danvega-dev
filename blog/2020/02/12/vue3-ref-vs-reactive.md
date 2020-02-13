---
slug: "vue3-ref-vs-reactive"
title: "Vue 3 Composition API: Ref vs Reactive"
date: "2020-02-12T16:27:46.472Z"
published: false
excerpt: "One question I keep hearing over and over is what method should I use to declare reactive data in the Vue 3 Composition API? In this article, I explain what ref() and reactive() are and try to answer that question."
author: "Dan Vega"
tags:
  - "vue"
cover: "./vue3-ref-vs-reactive-cover.png"
---

At the time of writing this article, we are getting closer and closer to the release of Vue 3. I think what I am most excited about is to see how other developers embrace it and use it. While I have had a chance to play with it over the last few months I know that isn't the case for everyone.

The biggest feature coming to Vue 3 is the Composition API. This offers an alternative approach to creating components that is much different than the existing options API. I have no problem admitting that when I first saw it, I didn't get it. The more I use it though the more it just makes sense. While you won't go rewriting entire applications using the Composition API it will make you think about how create components and compose functionality going forward.

I have [given a couple](https://www.danvega.dev/blog/2020/01/09/codemash-2020/) presentations on Vue 3 recently and one question that keeps coming up is when do I use Ref vs Reactive to declare a reactive property. I never had a great answer for this so over the past couple of weeks I set out to answer this question and this article is the result of that research.

![New Technology](./christopher-gower-m_HRfLhgABo-unsplash.jpg)

I would also like to point out that this is my opinion and please do not take this as "the way" things should be. This is how I am going to use Ref & Reactive until someone tells me otherwise or until I discover a better approach. With any new technology, I think that it takes some time to figure out how we use it and from there a best practice might emerge.

Before we get started I am going to assume that you have at least looked at the Composition API and understand the different components of it. This article is going to focus on Ref vs Reactive and not the mechanics of the Composition API. If you're interested in an in-depth tutorial on that please let me know.

## Reactive State in Vue 2

To give this article a little context I want to quickly explore how to create reactive data in a Vue 2 application. When you want Vue to keep track of changes to data you need to declare that property inside of an object that is returned from the data function.

```html
<template>
  <h1>{{ title }}</h1>
</template>

<script>
  export default {
    data() {
      return {
        title: "Hello, Vue!"
      };
    }
  };
</script>
```

Under the hood Vue 2, looks at each property and uses `Object.defineProperty()` to create getters and setters for each piece of data it needs to keep track of. This is a basic explanation of the process but what I want to get across is that it is not magic. You can't just create data anywhere and expect Vue to keep track of it. You must follow the process of defining it in the `data()` function.

## Ref vs Reactive

With the Options API, we have to follow some rules when defining reactive data and the Composition API is no different. You can't just declare data and expect Vue to know that you would like it tracked for changes. In the following example, I have defined a title and returned that from the `setup()` function making it available in the template.

```html
<template>
  <h1>{{ title }}</h1>
</template>

<script>
  export default {
    setup() {
      let title = "Hello, Vue 3!";
      return { title };
    }
  };
</script>
```

This will work but the title property is not reactive. This means that if something changes title those changes will **NOT** be reflected in the DOM. Say for example you wanted to update the title after 5 seconds, the following will **NOT** work.

```html
<template>
  <h1>{{ title }}</h1>
</template>

<script>
  export default {
    setup() {
      let title = "Hello, Vue 3!";

      setTimeout(() => {
        title = "THIS IS A NEW TITLE";
      }, 5000);

      return { title };
    }
  };
</script>
```

To fix the example above we can `import { ref } from 'vue'` and use `ref()` which will mark that variable as reactive data. Under the hood, and new in Vue 3, Vue will create a [Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy).

```html
<template>
  <h1>{{ title }}</h1>
</template>

<script>
  import { ref } from "vue";

  export default {
    setup() {
      const title = ref("Hello, Vue 3!");

      setTimeout(() => {
        // you might be asking yourself, what is this .value all about...
        // more about that soon
        title.value = "New Title";
      }, 5000);

      return { title };
    }
  };
</script>
```

I also want to be clear that when it comes to Ref vs Reactive I believe there are two stories to be told. The first story has to do when you're creating a component like we are above and you need to define reactive data. The second story is when you are creating composable functions that functions or components will **use**. In this article, I will take a look at each of these scenarios.

### Ref

If you want to make a primitive data type a reactive property, `ref()` is going to be your first choice. Again, this isn't a silver bullet but this is a good place to start. If you need a refresher the seven primitive data types in JavaScript are:

- String
- Number
- BigInt
- Boolean
- Symbol
- Null
- Undefined

```js
import { ref } from "vue";

export default {
  setup() {
    const title = ref("");
    const one = ref(1);
    const isValid = ref(true);
    const foo = ref(null);
  }
};
```

From the previous example, we had a String called title so `ref()` was a good choice for declaring reactive data. If you have some questions about that code we wrote below don't worry, I had the same questions.

```js
import { ref } from "vue";

export default {
  setup() {
    const title = ref("Hello, Vue 3!");

    setTimeout(() => {
      title.value = "New Title";
    }, 5000);

    return { title };
  }
};
```

Why use a `const` for the title when the value is going to change? Shouldn't we be using `let` here? If you were to `console.log(title)` you might expect to see the value `Hello, Vue 3!`, instead you get an object that looks like this:

```js
{_isRef: true}
value: (...)
_isRef: true
get value: ƒ value()
set value: ƒ value(newVal)
__proto__: Object
```

`ref()` takes an inner value and returns a reactive and mutable ref object. The ref object has a single property `.value` that points to the inner value. This means that if you want to access or mutate the value you need to use `title.value`. and because this is an object that won't change I have decided to declare it as a `const`.

### Ref Unwrapping

The next question you might ask is "Why don't we have to reference `.value` in the template"?

```html
<template>
  <h1>{{ title }}</h1>
</template>
```

When a ref is returned as a property on the render context (the object returned from setup()) and accessed in the template, it automatically unwraps to the inner value. There is no need to append `.value` in the template.

> Computed Properties work the same so if you need the value of a computed property within the setup() method you will need to use `.value`

### Reactive

You just examples of using `ref()` when you want to define reactive data on primitive values. What happens if you want to create an reactive object? In that case, you could still use `ref()` but underneath the hood, it's just calling `reactive()` so I will stick to using `reactive()`.

On the flip side of that `reactive()` will not work with primitive values. `reactive()` takes an object and returns a reactive proxy of the original. This is equivalent to 2.x's `Vue.observable()` and was renamed to avoid confusion with RxJS observables.

```js
import { reactive } from "vue";

export default {
  setup() {
    const data = reactive({
      title: "Hello, Vue 3"
    });

    return { data };
  }
};
```

The big difference here is when you want to access data defined using `reactive()` in your template. In the previous example `data` is an object that contains a property named `title`. You will need to reference `data.title` in your template:

```html
<template>
  <h1>{{ data.title }}</h1>
</template>

<script>
  import { ref } from "vue";

  export default {
    setup() {
      const data = ref({
        title: "Hello, Vue 3"
      });

      return { data };
    }
  };
</script>
```

### Ref vs Reactive in Components

So based on everything discussed so far the answer is pretty easy right? We should just use `ref()` for primitives and `reactive()` for objects. As I started building components out that wasn't always the case and in-fact [the documentation](https://vue-composition-api-rfc.netlify.com/#ref-vs-reactive) states:

> The difference between using ref and reactive can be somewhat compared to how you would write standard JavaScript logic

I started thinking about that and it led me to the following conclusion. In the examples, we have seen I single property named `title` which was a `String` and it made perfect sense to use `ref()`. As my application started growing though I had the following properties defined:

```js
export default {
  setup() {
    const title = ref("Hello, World!");
    const description = ref("");
    const content = ref("Hello world");
    const wordCount = computed(() => content.value.length);

    return { title, description, content, wordCount };
  }
};
```

In JavaScript, I would look at these properties and determine that they are all properties of my `page` object. In that case, I would group them all of them into a JavaScript object so why not do the same here.

```html
<template>
  <div class="page">
    <h1>{{ page.title }}</h1>
    <p>{{ page.wordCount }}</p>
  </div>
</template>

<script>
  import { ref, computed, reactive } from "vue";

  export default {
    setup() {
      const page = reactive({
        title: "Hello, World!",
        description: "",
        content: "Hello world",
        wordCount: computed(() => page.content.length)
      });

      return { page };
    }
  };
</script>
```

This is how I have been approaching Ref vs Reactive in my components but I would love to hear from you. Are you doing something similar? Is this approach wrong? Please leave me some feedback below.

## Creating Composable Logic

There isn't any wrong answer when using `ref()` or `reactive()` in your components. They both will create reactive data and as long as you understand how to access that data in your `setup()` method and in your templates you shouldn't have any issues.

When you start writing composable functions though you need to understand the difference. I am going to use the example from the RFC documentation because it does a great job of explaining the side effects.

You have been tasked with creating some logic that will keep track of a user's mouse position. You also need the ability to reuse this logic in any component that needs it. You create a composition function that tracks the x and y coordinates and then returns them to the consumer.

```js
import { ref, onMounted, onUnmounted } from "vue";

export function useMousePosition() {
  const x = ref(0);
  const y = ref(0);

  function update(e) {
    x.value = e.pageX;
    y.value = e.pageY;
  }

  onMounted(() => {
    window.addEventListener("mousemove", update);
  });

  onUnmounted(() => {
    window.removeEventListener("mousemove", update);
  });

  return { x, y };
}
```

If you want to consume this logic in a component you can call the function, destructure the return object and then return the x and y coordinates to your template.

```html
<template>
  <h1>Use Mouse Demo</h1>
  <p>x: {{ x }} | y: {{ y }}</p>
</template>

<script>
  import { useMousePosition } from "./use/useMousePosition";

  export default {
    setup() {
      const { x, y } = useMousePosition();
      return { x, y };
    }
  };
</script>
```

This will work but as you took a look at this function you decided to refactor x and y into a position object:

```js
import { ref, onMounted, onUnmounted } from "vue";

export function useMousePosition() {
  const pos = {
    x: 0,
    y: 0
  };

  function update(e) {
    pos.x = e.pageX;
    pos.y = e.pageY;
  }

  // ...
}
```

The problem with this approach is that the consumer of the composition function must keep the reference to the returned object at all times in order to retain reactivity. This means that the object cannot be destructured or spread:

```js
// consuming component
export default {
  setup() {
    // reactivity lost!
    const { x, y } = useMousePosition();
    return {
      x,
      y
    };

    // reactivity lost!
    return {
      ...useMousePosition()
    };

    // this is the only way to retain reactivity.
    // you must return `pos` as-is and reference x and y as `pos.x` and `pos.y`
    // in the template.
    return {
      pos: useMousePosition()
    };
  }
};
```

This doesn't mean that you can't use reactive though. There is a `toRefs()` method that will convert a reactive object to a plain object, where each property on the resulting object is a ref pointing to the corresponding property in the original object.

```js
function useMousePosition() {
  const pos = reactive({
    x: 0,
    y: 0
  });

  // ...
  return toRefs(pos);
}

// x & y are now refs!
const { x, y } = useMousePosition();
```

As you can see there are some things to consider when creating composition functions. As long as you understand how your functions might be consumed you should be ok.

## Summary

When I first started creating components using the Composition API I was confused when to reach for `ref()` and when to favor `reactive()`. I still might be doing it wrong but until someone tells me I am this is the approach I am going to take. I hope I helped clear up some questions and I would love to hear your feedback below. Thanks for reading, and as always friends...

Happy Coding<br/>
Dan
