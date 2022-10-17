---
title: Spring Data, Security, and taking your apps to Production
slug: spring-to-production
date: "2022-10-17T17:00:00.000Z"
---

Happy Monday and welcome to another edition of the newsletter. After missing a week I’m excited to be back and sharing some updates with you. In today’s newsletter I want to talk about Spring Data, Spring Security, A GraphQL testing tip, and taking your Spring apps to Production.

## Current Status

I’m writing this status update on Friday while I am enjoying a random day off. VMware gives us an EPIC (Execution/Passion/Integrity/Customers/Community) day off each quarter. This is a chance for us to unplug, unwind and spend the day doing something that makes us happy. My wife is currently spending some time in Arizona which means I am solo for a few days and enjoying some alone time with my daughters. I’m mentioning this because I absolutely love the company I work for. They really look out for you and where core values might have been some words in a document in the past I feel like they really stand for them here.

While I am talking about VMware I was able to purchase a new [NordicTrack Treadmill](https://amzn.to/3eCJcQ3) this year thanks to our well-being benefit. I prefer to run outside but as soon as it's raining or it is cold I turn into a baby and would much rather be inside. This treadmill is my absolute favorite piece of fitness equipment I have ever owned. I really love the iFit program where I can run with a coach in amazing places all over the world. This is mostly why I joined CrossFit way back in the day so that someone else could tell me what to do. I’m currently going through a 10k training series with my sight set on a half or full marathon next year.

I wanted to bring up running for a couple of reasons. This weekend I am heading down to Ocean Isle NC for a wedding so if you have any running recommendations please let me know. I am staying on the ocean so my plan is to run along the ocean but you never know if the sand is going to be runnable or too deep. The other reason is that DaShaun and I are throwing around the idea of putting together a run at SpringOne. This will probably be a 5k but you can run at your own pace or walk. If you’re interested please let me know.

Finally, YouTube rolled out handles this week which is a new way to identify your YouTube channel. If you want to visit my YouTube channel you can now get to it using my handle, **danvega**.

[https://www.youtube.com/@danvega](https://www.youtube.com/@danvega)

## Dependency Injection in Spring

I recently had the opportunity to collaborate on a guide with my coworker [Mario Gray](https://twitter.com/mariogray). With some upcoming workshops on Getting Started with Spring Boot, I thought this would be a great opportunity to talk about some of the core concepts in Spring starting with Dependency Injection.

The guide is available at the [Tanzu Developer Center](https://tanzu.vmware.com/developer/) where you will find tons of free guides, articles, videos, and workshops. The guide starts off by explaining what Dependency Injection is and why you should care about it. From there you will go into building a real application that will demonstrate the issues you will run into without DI and how to solve them in Spring using Dependency Injection.

I also have the video version of this recorded so if you haven’t already subscribed to my [YouTube channel](https://www.youtube.com/@danvega) you should do so now and hit that notification icon!

## Spring Data JDBC

If you have been following my tutorials you will know that I have used Spring Data JDBC in the past. I have to admit that while I have used it I only did it at a basic level by defining a single model. This is because I didn’t understand some of the core features and how to model relationships between objects. I thought it was time to sit down and learn all about Spring Data JDBC and over the past month that's exactly what I did.

In this tutorial, I discuss Domain Driven Design, aggregates, and aggregate roots which are core to understanding where to start. When it comes to defining relationships something [Jens Schauder](https://twitter.com/jensschauder) said has really helped _“There are 2 types of relationships you have to define and those are the ones between aggregates and the ones within aggregate roots”._ I hope you enjoy this tutorial where you will create a Spring Boot project from scratch and learn how to use Spring Data JDBC.

`youtube:https://youtu.be/l_T0nQNbFiM`

## Spring Security JWT

I recently created a [tutorial](https://youtu.be/KYNR5js2cXE) on using JSON Web Tokens (JWTs) with Spring Security. I received a lot of really good feedback from that video. The one question I heard the most was how can we authenticate against a username and password that is sent in the request body and remove HTTP Basic.

This was a great question and I know this is something I have done in the past but I wasn’t quite sure how to do it in the newer versions of Spring Security. I did what anyone with access to the Spring Security team would do, I asked them. [Daniel Garnier-Moiroux](https://twitter.com/kehrlann) reached out and was able to help me solve all of my problems.

My biggest question was how to get an instance of the `AuthenticationManager`. I know that I needed an instance of that to be able to use the `authenticate()` method so that was my starting point. After searching the web I found some answers but a lot of them involved getting an instance of the `AuthenticationManager` from the `AuthenticationConfiguration.`

After speaking with the Spring Security team I was informed that we should avoid this approach and instead create our own Authentication Manager. Once I was armed with that knowledge I had what I needed to complete this tutorial. If you want to see me walk through how to authenticate and return a JWT from a single endpoint check out the video below.

`youtube:https://youtu.be/UaB-0e76LdQ`

## GraphQL Testing Tip

I created a [YouTube Short](https://youtube.com/shorts/7qdyalH7mf4?feature=share) on a really handy tip I picked up for testing your GraphQL APIs. When you’re writing tests you usually start with a document which is the query, mutation, or subscription you would like to execute.

You will find that you end up writing these over and over and usually, they are duplicated from a previous test. Whenever you start copying/pasting code an alarm should go off in your head that there might be an easier way. I found out that you can move these queries into a file which will now allow you to reuse them in multiple tests.

[https://twitter.com/therealdanvega/status/1577653689996742658](https://twitter.com/therealdanvega/status/1577653689996742658)

## Azure Spring Apps

In a recent episode of [Spring Office Hours](https://youtu.be/1cLu3sz56wY) DaShaun and I covered how to get your Spring Applications to production. Since that live stream, I have had some time to dive into [Azure Spring Apps](https://azure.microsoft.com/en-us/products/spring-apps/) and I have to say I am really impressed with the platform. It makes moving enterprise applications to production and where it really gets interesting is if you work with distributed architectures. With built-in support for configuration and service registration deploying Microservices just got easy.

I put together a [Github repository](https://github.com/danvega/spring-blog) that has a sample application I am going to use to deploy to a number of hosting providers. I also have a Github Workflow in there to show off how you can automatically build and deploy your applications on Azure Spring Apps. The first platform is Azure and I should have a video out this week we will discuss it further during [Spring Office Hours](https://tanzu.vmware.com/developer/tv/spring-office-hours/). If there is anything specific you would like to see me cover feel free to reach out to me on Twitter or reply to this email.

## Content Links

I talked about a few of the things I worked on above but here is the entire collection of things that got my attention over the last 2 weeks.

- YouTube
  - [Spring Data JDBC Introduction](https://youtu.be/l_T0nQNbFiM)
  - [Spring Security JWT with username and password auth](https://www.youtube.com/watch?v=UaB-0e76LdQ)
- YouTube Shorts
  - [The best way to learn spring boot](https://youtube.com/shorts/JetJaKkDLoE?feature=share)
  - [Spring for GrqphQL Testing Tip](https://youtube.com/shorts/7qdyalH7mf4?)
- Spring Office Hours
  - [Episode 14 - Ahead of Time (AOT) Compilation](https://youtu.be/QPTSDrEJztg)
  - [Episode 15 - Spring to Production](https://youtu.be/1cLu3sz56wY)
- Tanzu Developer Center
  - [Spring Dependency Injection](https://tanzu.vmware.com/developer/guides/dependency-injection/)

## Upcoming Talks

- [SpringOne - A Gentle Introduction to Spring for GraphQL](https://springone.io/2022/sessions/a-gentle-introduction-to-spring-for-graphql)
- [SpringOne - Getting Started with Spring Boot Workshop](https://springone.io/2022/workshops/spring-boot-beginner)
- [CodeMash 2023](https://www.codemash.org/): Give your APIs a REST & Make the move to GraphQL
- [CodeMash 2023](https://www.codemash.org/): Getting Started with Spring

## Around the Web

### 📝 Articles

- [Spring Framework 6.0 goes RC1](https://spring.io/blog/2022/10/12/spring-framework-6-0-goes-rc1)
- [Getting Started with GraalVM and Spring Native](https://tanzu.vmware.com/developer/guides/graalvm-with-spring/)
- [Embracing Virtual Threads](https://spring.io/blog/2022/10/11/embracing-virtual-threads)
- [Keeping dependencies up to date with Maven](https://medium.com/@mlvandijk/keeping-dependencies-up-to-date-with-maven-be8f7fb6441e)
- [The best way to log SQL statements with Spring Boot](https://vladmihalcea.com/log-sql-spring-boot/)

### 🎬 Videos

- [Getting modules right with Domain-driven Design by Michael Plöd - Spring I/O 2022 Sessions](https://www.youtube.com/watch?v=Q_0XW46IlHY)
- [Let's build components, not layers by Tom Hombergs @ Spring I/O 2022](https://www.youtube.com/watch?v=-VmhytwBZVs)
- [Spring Tips: Spring Boot & Apache Kafka](https://spring.io/blog/2022/10/10/spring-tips-spring-boot-apache-kafka)
- [Devoxx Belgium 2022](https://www.youtube.com/watch?v=g_Y6VqKVjuM&list=PLRsbF2sD7JVolUH45EkGXsT-3spU7cqnS)

### 🎙 Podcasts

- [goto; book club - Thomas Vitale & Mark Heckler](https://gotopia.tech/bookclub/episodes/spring-boot-up-and-running)
- [Google mad scientist Josh Suereth](https://bootifulpodcast.fm/#/episodes/5b6eea77-d792-4856-8770-2719844ef01d)
- [Compressed.fm - Breaking into DevRel](https://player.fm/series/compressedfm/ep-088-breaking-into-dev-rel-featuring-tessa-mero)

### ✍️ Quote of the week

"We are what we repeatedly do. Excellence, then, is not an act, but a habit." — Aristotle

### 🐦 Tweets

[https://twitter.com/springcentral/status/1577314901525204992](https://twitter.com/springcentral/status/1577314901525204992)

## Until Next Week

Thanks for sitting down and sharing a cup of coffee with me my friend. I hope you enjoyed this installment of the newsletter and I will talk to you in the next one. If you have any links you would like me to include please [contact me](http://twitter.com/therealdanvega) and I might add them to a future newsletter. I hope you have a great week and as always friends...

Happy Coding<br/>
Dan Vega<br/>
danvega@gmail.com<br/>
[https://www.danvega.dev](https://www.danvega.dev)

