---
slug: inserting-a-groovy-date-into-a-time-stamp-column
title: "Inserting a Groovy Date into a Time Stamp Column"
published: true
date: 2017-04-10T08:00:06-04:00
tags: ['Groovy']
excerpt: "Inserting a Groovy Date into a Timestamp Column"
cover: './GroovyDate-760x428.png'
---

Working with Dates in any language is one of those core fundamentals you need to know right away. Lucky for us, Groovy makes it super simple to work with dates. I am working on a project where I am using straight SQL to insert a record into a database using Groovy. It's pretty darn easy in most languages to grab the current date/time and in Java, you can do so just by creating a new instance of the Date class.

```java
Date now = new Date();
```

The problem with this (and the same goes for other languages) is that you can't insert that value into a timestamp column. I need to stick this date/time into a timestamp column and to do so in most languages you need to format this so it matches up to what a timestamp column expects. With this simple Java example, we need to bring in another package to do formatting, create a formatting object with the correct pattern and then format our date. Not the hardest thing in the world to do but certainly something I don't care to do.

```java
import java.text.SimpleDateFormat;

Date now = new Date()
SimpleDateFormat timestamp = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

// 2017-04-10 08:00:00
println timestamp.format(now)
```
Luckily I am using Groovy on this project. If you haven't already played around with Groovy it seems to remove the annoyances of Java by adding on to the API. Groovy adds a convenient method to all Date objects for converting a date to a timestamp. If you print out the class names you will also see that it's not just converting it into a formatted string but an actual timestamp object.  No extra libraries needed and I don't have to remember what a timestamp format looks like.

```java
def now = new Date()
def timestamp = now.toTimestamp()

println now // Mond Apr 10 08:00:00 EST 2017
println now.class.name // java.util.Date
println timestamp // 2017-04-10 08:00:00.00
println timestamp.class.name // java.sql.Timestamp
```

To me, this is just one in the land of many examples of how Groovy makes programming in Java fun.

_**Question:** What are some of the other ways Groovy makes your life easier? _