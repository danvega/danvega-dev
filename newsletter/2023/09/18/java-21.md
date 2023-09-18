---
title: Java 21, The new JDBC Client and the Spring Boot Actuator
slug: java-21
date: "2023-09-18T07:00:00.000Z"
---

Happy Monday and welcome to another edition of the newsletter. Last week, I took a quick trip to Seattle to visit with a customer. While there, Josh Long and I presented on Spring Boot 3 and GraphQL, respectively, in person. It was a great trip and I have been looking forward to meeting this customer in person for a long time.

![Seattle Waterfront](./seattle_waterfront.jpeg)

I was also pretty excited about the iPhone 15 announcements last week. I am still using a 13 pro and I have been waiting for this one. I am excited about a lot of the new features but none more than the improved camera when it comes to shooting video. This is going to be a big step over my 2 year old phone for shooting video on the road.

In this weeks newsletter I want to talk about the release of Java 21, The JDBC Client and The Spring Boot Actuator.

## JDK 21 is here!

This is a really exciting week as [JDK 21](https://openjdk.org/projects/jdk/21/) is set to be released tomorrow. There are a total of 15 JEPs (Java Enhancement Proposals) included with this release and they are listed below. If you want to learn more about each of them you can click on the links below. The JEP contains a lot of information such as the history, the motivation behind it and the details for the feature.

| **JEP** | **Feature** |
| --- | --- |
| 430: | [String Templates (Preview)](https://openjdk.org/jeps/430) |
| 431: | [Sequenced Collections](https://openjdk.org/jeps/431) |
| 439: | [Generational ZGC](https://openjdk.org/jeps/439) |
| 440: | [Record Patterns](https://openjdk.org/jeps/440) |
| 441: | [Pattern Matching for switch](https://openjdk.org/jeps/441) |
| 442: | [Foreign Function and Memory API (Third Preview)](https://openjdk.org/jeps/442) |
| 443: | [Unnamed Patterns and Variables (Preview)](https://openjdk.org/jeps/443) |
| 444: | [Virtual Threads](https://openjdk.org/jeps/444) |
| 445: | [Unnamed Classes and Instance Main Methods (Preview)](https://openjdk.org/jeps/445) |
| 446: | [Scoped Values (Preview)](https://openjdk.org/jeps/446) |
| 448: | [Vector API (Sixth Incubator)](https://openjdk.org/jeps/448) |
| 449: | [Deprecate the Windows 32-bit x86 Port for Removal](https://openjdk.org/jeps/449) |
| 451: | [Prepare to Disallow the Dynamic Loading of Agents](https://openjdk.org/jeps/451) |
| 452: | [Key Encapsulation Mechnaism API](https://openjdk.org/jeps/452) |
| 453: | [Structured Concurrency (Preview)](https://openjdk.org/jeps/453) |


If you're interested in hearing my thoughts on this, we will cover the release on [Spring Office Hours](https://www.youtube.com/watch?v=TAliLDYe20M) this week. Additionally, I hope to release a few videos on the YouTube channel over the next few weeks.

This is an exciting development for the Java community. As a Spring Developer, I'm particularly enthusiastic about Virtual Threads and how they offer a new way to scale Spring MVC applications.

## JDBC Client

Last week I created a tutorial on the new JDBC Client in Spring Framework. Spring Boot 3.2 will add auto-configuration for the new client that is being released in Spring Framework 6.1. This is a follow up to my tutorial on the other new client, the [Rest Client](https://www.danvega.dev/blog/2023/09/08/rest-client-first-look/). If you want to learn more about it you can check out this [blog post](https://www.danvega.dev/blog/2023/09/11/spring-jdbc-client/) or the video below.

`youtube:https://youtu.be/JBu5GibEJ4k`

And here are the 3 shorts I created for the JDBC Client tutorial:

- [JDBC Template vs JDBC Client](https://youtube.com/shorts/Sv0-b5rsw08?feature=share)
- [JDBC Client First Impressions](https://youtube.com/shorts/66O-PSw25fU?feature=share)
- [Working with JDBC in Java and Spring](https://youtube.com/shorts/IYi2hHpO9W8?feature=share)

## Spring Boot Actuator

I started off this particular piece of content by asking Spring Boot Developers what the #1 Spring Boot Starter is that should be included in every single application. There really is no right answer and it’s purely an opinion but I believe it is the Spring Boot Actuator.

The Spring Boot Actuator gives us a number of features that help us move our applications to production. In this tutorial I take a look at what you get out of the box with the Actuator and what you can do to customize it. I also take a look at how you can customize the info endpoint and create your own to provide whatever data you need to other applications.

If you’re interested you can check out this [blog post](https://www.danvega.dev/blog/2023/09/17/spring-boot-actuator/) or the video below.

`youtube:https://youtu.be/4OVe0MWgZ4k`

As I talked about last week I’m trying to create shorts related to each of my long form videos. Here are the 3 shorts I created for the Spring Boot Actuator tutorial:

- [The #1 Spring Boot Starter](https://youtube.com/shorts/1otiGkwk76s?feature=share)
- [Spring Boot Actuator helps us move to production](https://youtube.com/shorts/PLuqBHzciT4?feature=share)
- [Create a new app with Spring Boot Actuator](https://youtube.com/shorts/LCqIQ5YorgI?feature=share)

## SpringOne Tour Virtual

We’re still buzzing from the amazing energy at SpringOne at VMware Explore. If you made it out to Las Vegas, we were thrilled to have you be a part of the vibrant Spring developer community. If you weren’t able to make the event, there are still opportunities to learn from industry experts and connect.

The first stop on our SpringOne Tour is a virtual session where we’ll be featuring the latest advancements, best practices, and tools and techniques that are quickly becoming industry-standard. Our technical advocates, Spring engineers, and application development experts will bring you an in-depth look into the beauty of open source, with Spring Framework, Spring Boot 3, Kubernetes, Progressive Delivery and more, so you can innovate faster.

Join us virtually on October 17, 2023 by [registering for free using this link](https://springonetour.io/).

## Around the web

### 📝 Articles

I really enjoyed this article by Chris Seaton on the 10 things to do with GraalVM. You have probably heard of by GraalVM by now but maybe you aren’t quite sure what the use cases are. Chris has you covered as he walks through 10 things you can do with GraalVM.

Java 21 will be released tomorrow and I can’t think of a better way to catch up on all the new features than by reading [Nicolai Parlog’s Inside article](https://blogs.oracle.com/javamagazine/post/java-inside-21-features).

### 🎬 Videos

Speaking of Java 21 there is going to be an [8 hour live stream release party](https://dev.java/community/java-21-launch/) by our friends at Oracle. That is right, 8 hours of everything Java 21 and I can’t wait to check this out. If you want to learn all about Java 21 you need to check this out.

### 🎙 Podcasts

I really love to learn and one of my main sources for learning is through podcasts. I love to listen to software and business related podcasts but my feed is becoming pretty stale and I need some new podcasts to listen to. If you have some favorites in these areas or any other ones you find interesting please tell me about them. You can reply to this email or reach out to me on [Twitter](https://twitter.com/therealdanvega).

### ✍️ Quote of the week

“The truth is that stress doesn’t come from your boss, your kids, your spouse, traffic jams, health challenges, or other circumstances. It comes from your thoughts about your circumstances.”

**―Andrew Bernstein**

### 🐦 Tweet

Java is so cool that the most popular YouTuber on the planet is hiring Java developers.

[https://twitter.com/therealdanvega/status/1702763200557560217](https://twitter.com/therealdanvega/status/1702763200557560217)

## Until Next Week

I hope you enjoyed this newsletter installment, and I will talk to you in the next one. If you have any links you would like me to include please [contact me](http://twitter.com/therealdanvega) and I might add them to a future newsletter. I hope you have a great week and as always friends...

Happy Coding<br/>
Dan Vega<br/>
danvega@gmail.com<br/>
[https://www.danvega.dev](https://www.danvega.dev)
