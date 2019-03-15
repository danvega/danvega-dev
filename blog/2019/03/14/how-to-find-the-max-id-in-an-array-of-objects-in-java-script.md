---
slug: "how-to-find-the-max-id-in-an-array-of-objects-in-java-script"
title: "How to find the max id in an array of objects in JavaScript"
date: "2019-03-14T10:59:53.416Z"
published: false
excerpt: "A quick tutorial on the thought process on how you would go about finding the max id in an array of objects in JavaScript"
author: "Dan Vega"
tags:
  - "javascript"
cover: ./find-max-id-cover.png
---

I was recently putting together a tutorial for some students and I came across an issue that I am sure we have all come across at one time or another. I had this array of objects and in each object I had an id. I wanted a quick and efficient way to look at all of the ids and find the max id.

In this article I will walk you through a 4 different solutions.

- Array.forEach
- Array.map
- Array.reduce
- Math.max

## Setting up your project

I am using Node to run this example but you can just as easily use JavaScript and drop this into a web page. The first thing that I am going to do is to require the [assert module](https://nodejs.org/api/assert.html) from Node which gives us the ability to provide a simple set of assertion tests.

```javascript
const assert = require("assert");
```

Next you are going to create an array of characters. I recently read the book [Bad Blood](https://amzn.to/2TFwvIC) so I decided to use some of the characters from that book. Side note: If you haven't read that book yet, I highly recommend it. Each character in the array is going to be an object that contains an id, first name and last name.

```javascript
const characters = [
  { id: 1, first: "Tim", last: "Draper" },
  { id: 17, first: "David", last: "Boies" },
  { id: 199, first: "Tim", last: "Kemp" },
  { id: 75, first: "Henry", last: "Mosley" },
  { id: 444, first: "Elizabeth", last: "Holmes" },
  { id: 95, first: "Donald", last: "Lucas" },
  { id: 186, first: "Larry", last: "Ellison" },
  { id: 364, first: "Channing", last: "Robertson" },
  { id: 285, first: "Charles", last: "Fleischmann" },
  { id: 33, first: "John", last: "Howard" }
];
```

In each possible solution you want to write some logic that will return the largest id in the array.

## Array.forEach

Your first thought might be to iterate over the array using some type of loop and why not, its what you have been taught to do since you started writing code. You can start off by declaring a max of zero, iterate over each character and if its id is larger than the max, update the max.

```javascript
let max = 0;
characters.forEach(character => {
  if (character.id > max) {
    max = character.id;
  }
});
assert(max === 444);
```

My main objective every time I write code is to get something to work first and then improve upon it later. If you were to run this code it certainly works but it just doesn't seem right to me. What if you have one thousand or a million objects in the array? Any time that I start iterating over an array using some type of loop to perform som calculation that is a huge red flag for me.

## Array.map

Whenever that red flag of iterating over an array comes up I immediatly ask myself is this something that map/filter/reduce can solve. So if you were going to take that approach here you can start with the [map method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map). The `map()` method creates a new array with the results of calling a provided function on every element in the calling array. You will use the map method to create a new array that contains just the id's so you're no longer working with objects. At this point you can just use the normal sort method on the array, grab the last element in the list and that is your max id.

```javascript
const ids = characters.map(user => user.id);
const sorted = ids.sort((a, b) => a - b);
assert(sorted[sorted.length - 1] === 444);
```

If you wanted to get really fancy you can do all of that in a single statement.

```javascript
assert(
  characters.map(user => user.id).sort((a, b) => a - b)[
    characters.length - 1
  ] === 444
);
```

## Array.reduce

The `reduce()` method executes a reducer function (that you provide) on each member of the array resulting in a single output value. Here you are going to call reduce on the characters array. You will define a accumulator which will accumulate the callback's return value. Every time the callback function is called it will return a value and store it in max. The callback method is looking at the character id and if it's greater than max it returns that, if not it returns max. Finally it needs to set a default value for max and that is what `characters[0].id` is doing.

```javascript
const maxId = characters.reduce(
  (max, character) => (character.id > max ? character.id : max),
  characters[0].id
);
assert(maxId === 444);
```

If you notice this is a similar approach to us using the forEach method, iterating over each element and comparing it to max. The difference here is using reduce is much faster. You can also use a combination of reduce and the next solution `Math.max()` if you want to.

## The Spread Operator

While I like the map and reduce approach much better than iterating over the array it still doesn't feel great to me. If you dig into [Math.max](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max) you will find out that it can take a list of numbers or an array of numbers.

This means that all you have to do is get an array of id's and you can pass that into the `max()` function. If you were paying attention you already did that earlier using map. This means that you can use the map function to get an array of id's and then pass it into the `max()` function using the spread operator.

```javascript
assert(Math.max(...characters.map(user => user.id)) === 444);
```

> Spread syntax allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

This to me is the cleanest looking solution and I happen to really like it.

## Performance Results

I didn't mean to turn this into an article about functional programming in JavaScript but this is where we landed. I did some basic timing of each of the functions (using `console.time()` & `console.timeEnd()`) and found the following results.

- iterate test: 0.217ms
- map test: 0.191ms
- reduce test: 0.144ms
- spread test: 0.148ms

## Conclusion

While using reduce gave us an ever so slight performance advantage I prefer using Math.max and the spread operator here. To me it just looks cleaner and it is something that I enjoy writing. If you were given this problem what solution do you reach for? Am I missing any? I hope you enjoyed walking through how I would solve this problem and until next time...

Happy Coding</br>
Dan
