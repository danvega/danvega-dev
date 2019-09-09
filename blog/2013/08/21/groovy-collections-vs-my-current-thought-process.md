---
slug: groovy-collections-vs-my-current-thought-process
title: "Groovy collections vs My Current Thought Process"
published: true
date: 2013-08-21T16:08:00-04:00
tags: ["grails","groovy"]
excerpt: "Groovy collections vs My Current Thought Process"
cover:
---

I have been a ColdFusion developer since before I can remember. What I have always loved about the language is that it made hard things really easy to do. Somewhere along the way though I think it lost some of this magic at the core of the language. Let's take a look at a pretty trivial problem (but one that might come up often) and look at how we can solve it in both ColdFusion and Groovy.

> Given a collection of names : print each name to screen and display a comma in between each name. Make sure to ommit the comma after the last name in the collection.

This doesn't seem like that hard of a problem, lets take a stab at it. First we create an array of names. In our first attempt we decide to use a for in loop and loop over each name in the collection. During each iteration we print the name and a comma. The main glaring problem with this approach is that we are going to print a comma after the last element and that won't solve the problem at hand.

```groovy
// a collection of names - ColdFusion Array
names = \["Dan","Sam","Lance","Brian","Todd","Joe","Scott"\];

// this won't work because we have a comma after last element
// and we can put some kind of if statement here because we can't check the index
for( name in names ) {
	writeOutput(name & ", ");
}
```

So we move on to our next attempt. We decide to use a for loop so that we can have the index of item that we are printing out. We will print out the name and a comma except for the last item where will not print out the comma.

```groovy
// a collection of names - ColdFusion Array
names = \["Dan","Sam","Lance","Brian","Todd","Joe","Scott"\];

// Now you the index and an you use an if statement to see if you should output the comma
for( i=1; i<=arrayLen(names); ++i ) {
	writeOutput(names\[i\]);
	if( i != arrayLen(names) ) {
		writeOutput(", ");
	}
}
```

While this will work it isn't a very clean solution. All this work to solve a pretty simple problem. Finally we do some looking around and remember these a special function in the language to accomplish this. ArrayToList will actually take an array and create a list with a delimiter. I could of actually left out the comma here as it is the default but I just wanted to make sure it was clear what was going on.

```groovy
// a collection of names - ColdFusion Array
names = \["Dan","Sam","Lance","Brian","Todd","Joe","Scott"\];

writeOutput(arrayToList(names, ","));
```

So I asked another dev to look at the same problem and he pretty much took the same thought process I did. I don't know about you but I feel like I write more loops in ColdFusion than anything so its alway my first instinct. Unless you know ever function the language has to offer the solution may not of been apparent to you right away. Be honest, did arrayToList cross your mind before you got to the solution?

Now let's look at the Groovy solution. I am pretty new to the language but one thing I have noticed is that working with collections is a joy to do. First lets look at the solution and then we will talk through our thought process. The join method will "join" each element in the list and separate them with the delimiter you provide.

```groovy
def names = \["Dan","Sam","Lance","Brian","Todd","Joe","Scott"\]

println names.join(', ')
```

So what is the difference. The difference here is the join() is a first class member function. This means that I can call it directly on the collection itself. I don't need to start thinking about what functions are available to me and what the arguments are (and what order the come in) I just know that I can call a method to accomplish this. I know that if I want to iterate over the collection of data I can call

```groovy
names.each()
names.eachWithIndex()
```

I know that if I am looking for something within the collection I can call

```groovy
names.find()
names.findAll()
```

I know that if I need the size of the collection I can call

```groovy
names.size()
```

Finally what about a scenario where you want to create a new array that holds the string length of each of our names. Our first thought again is we need to loop over the current collection and create a new one. To do so we need to initialize an empty array, loop over each name and then add a new element using a function that takes the array name and value.

```groovy
names = \["Dan","Sam","Lance","Brian","Todd","Joe","Scott"\];
nameLengths = \[\];

for( name in names ) {
	arrayAppend( nameLengths, len(name) );
}

writeDump(nameLengths);
```

In Groovy we again know that the collection has a 1st class function to do this using collect. This will return a new collection by manipulating the existing collection. This to me is a very clean and elegant solution.

```groovy
def names = \["Dan","Sam","Lance","Brian","Todd","Joe","Scott"\]

println names.collect { it.length() }
```

I hope nobody gets the wrong impression about ColdFusion here because many of these same approaches are the same in many languages. I just wanted to point out how much I enjoy working with collections in Groovy. They make me think a different way when dealing with data and I am finding myself writing a lot more boring iteration loops these days.
