---
slug: groovy-strings-a-couple-of-tips
title: "Groovy Strings - A couple of tips"
published: true
date: 2013-08-26T17:08:00-04:00
tags: ["groovy"]
excerpt: "Groovy Strings - A couple of tips"
cover:
---

One of the many differences from Java to Groovy is the way we can create strings. In Java a single quote is used to create a character literal. In Groovy we can use both single and double quotes to crate a string. We can test this by running the following code.

```groovy
def s1 = "This is a string"
def s2 = 'This is also a string'

println s1.class.name
println s2.class.name
```

This produces the following output.

> java.lang.String
> java.lang.String

You may also already know that we can use Groovy Strings to perform String interpolation. Using the ${} we can have the expression inside the brackets evaluated. One big thing to understand here now is that there is a different class for Groovy Strings and plain Strings. We can see the difference by running the following code.

```groovy
def str = "World!"
def msg = "Hello ${str}"

println str.class.name
println msg.class.name
```

That produces the following output

> java.lang.String
> org.codehaus.groovy.runtime.GStringImpl

I wanted to point this out so one thing is made very clear here. Strings and Groovy Strings are not the same. Just because we can create a string with single or double quotes doesn't mean that we can do so with Groovy Strings. In fact if you replaced the example above with single quotes 'Hello ${str}' you would just have that string repeated back and no expression will be evaluated. **Use double quotes when you are working with Groovy Strings. This also applies to multiline string """ vs '''**

Finally you may already know this but haven't really thought about it. We are NOT just replacing a variable in our string, we are evaluating an expression. Remember that Strings are objects and objects have operations that we can perform on them. In the following code we are calling the toUpperCase method from the String class to turn the string World into WORLD.

```groovy
def str = "World!"
def msg = "Hello ${str.toUpperCase()}"

println msg
```

That produces the following output.

> Hello WORLD!

Strings in Groovy are great and there is a lot more to learn about them but I thought I would share these 2 gotchas with you this evening.
