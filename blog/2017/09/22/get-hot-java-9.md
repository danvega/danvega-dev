---
slug: get-hot-java-9
title: "Get it while it's hot. Java 9 is out!"
published: true
date: 2017-09-22T08:21:00-04:00
tags: [Java]
excerpt: "Get it while it's hot. Java 9 is out!"
cover: ./2017-09-22_07-39-27-760x504.png
---

After a few delays, [Java 9 has finally been released](http://www.oracle.com/technetwork/java/javase/downloads/jdk9-downloads-3848520.html). This is the first major release of Java since March 2014. Java 9 is headlined by Jigsaw which is Java's new modularity system. This is a huge change to how we will write Java programs going forward but there are also a lot of other great features being released in 9. In this article, we will talk briefly about some of the highlights in Java 9.

## Java 9

### Jigsaw (Java Modularity) 

Remember when I said that there were a few delays in shipping Java 9? Well, this was mainly the feature that caused it. There was a lot of criticism about this new feature and I still don't think everyone is on the same page.  Project Jigsaw aims to design and implement a standard module system for the Java SE Platform and to apply that system to the Platform itself, and to the JDK. Its primary goals are to make implementations of the Platform more easily scalable down to small devices, improve security and maintainability, enable improved application performance, and provide developers with better tools for programming in the large. 

![Java 9: Project Jigsaw](./pexels-photo-218443-1-1024x682.jpeg)

### JShell

The JShell API and tool will provide a way to interactively evaluate declarations, statements, and expressions of the Java programming language within the JShell state. The JShell state includes an evolving code and execution state. To facilitate rapid investigation and coding, statements and expressions need not occur within a method, and variables and method need not occur within a class. The JShell tool will be a command-line tool with features to ease interaction including a history with editing, tab-completion, automatic addition of needed terminal semicolons, and configurable predefined imports and definitions.

### Http/2

Java 9 defines a new HTTP client API that implements HTTP/2 and WebSocket. This will allow us to replace the legacy HttpURLConnection API. This is only going to help us improve performance and faster loading pages. 

### Stream API Enhancements

The streams API that was released in Java 8 was a really great start. Java 9 fills in some of the holes here and gives us the ability to conditionally take or drop items from the stream. Along with a few other updates, these are great enhancements. 

### Process API Updates

Improve the API for controlling and managing operating-system processes.

### Multi-Release Jars

This is especially huge for any third party library creators. Currently, when a new version of Java is released they have to ship a new version of their libraries. With this update, they will be able to ship one JAR that contains multiple versions based on the JVM version being used. 

### Convenience Factory methods for Collections

I am always a huge fan API changes that allow me to write less code and this is one of them. Java 9 will Provide static factory methods on the collection interfaces that will create compact, unmodifiable collection instances. The API is deliberately kept minimal.

### Private Interface Methods

You now have the ability to create private methods in your interfaces.

### Other New Features

*   [Unified JVM Logging](http://openjdk.java.net/jeps/158)
*   [Parser API for Nashorn](http://openjdk.java.net/jeps/236)
*   [Javadoc Improvements](http://openjdk.java.net/jeps/224)
*   [Garbage Collector Improvements](http://openjdk.java.net/jeps/248)

These were just some of the highlights of what was released in Java 9. If you're a geek like me (and I'm guessing you are) you can [dig through the release notes here](http://www.oracle.com/technetwork/java/javase/documentation/9u-relnotes-3704429.html) for all the goodies. 

## Download Java 9

There are so many new features and I will do my best to highlight them here on the blog. Java 9 is now publicly available and can be [downloaded from here](http://www.oracle.com/technetwork/java/javase/downloads/jdk9-downloads-3848520.html).  

![Download Java 9](./luis-llerena-14779-1024x683.jpg)

## Conclusion

Java 9 is a really exciting release and I am excited to see what others think of it.  

_**Question:** What is your favorite new feature in Java 9?_