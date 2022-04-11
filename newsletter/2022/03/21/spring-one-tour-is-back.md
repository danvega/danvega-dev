---
title: Spring Boot Secrets, @JsonTest & SpringOne Tour is back!
slug: spring-one-tour-is-back
date: "2022-03-21T07:45:00.000Z"
---

Happy Monday friends! In last week's newsletter, I told you how excited I was to “Spring Forward” and move our clocks 1 hr ahead. It’s getting warmer here in Ohio and staying light out longer which I absolutely love. I was excited to read last week that the [US Senate approved a bill](https://www.reuters.com/world/us/us-senate-approves-bill-that-would-make-daylight-savings-time-permanent-2023-2022-03-15/) that would make daylight savings permanent. It is now headed to the desk of the President where It should be signed and we can all be done with this nonsense.

In today’s edition of the newsletter, I want to tell you about 2 YouTube videos I released last week and the upcoming SpringOne Tour.

## Spring Boot Secret Properties

In this tutorial, you will learn how to use Spring Boot secret properties in your next application. When you define your own configuration properties you need to find a way to set secret properties. You can do this through command-line arguments or environment variables, but I often forget that they are there.

Spring Boot 2.4 gave us the ability to import additional configuration files. In this demo, you will set the secret values in a file called secret.properties and ignore it from Git, so it doesn't get checked in. To wrap this up I will show you how to deploy this project to Heroku and override those secret properties using config vars.

`youtube:https://youtu.be/PmGLn3ua_lU`

## Spring Boot @JsonTest Annotation

I think if we are being honest most of us don’t write enough tests. We can all agree that they are useful but can’t seem to find the time for them. In Spring we have slice tests which speed up our tests by only loading a “slice” of the application context.

In this video, you will learn all about the Spring Boot @JsonTest Annotation. This annotation allows you to write a slice test for testing your object's serialization and deserialization. In the past, I might have just tested this through the web layer manually but this gives you a test that can be verified through CI/CD that everything is working as expected.

`youtube:https://youtu.be/AiiprfLqriY`

## SpringOne Tour

We are so happy to announce that the [SpringOne Tour](https://tanzu.vmware.com/developer/springone-tour/) is back, in person, and coming to a city near you. Our first stop of the tour will happen on April 26-27 in Chicago. I just finished booking my first trip through VMware and I couldn’t be more excited to connect with the Java & Spring community.

I am presenting on Getting Started with [Spring for GraphQL](https://spring.io/projects/spring-graphql). If you want to learn the basics of GraphQL and how (and more importantly when) to use it in your next Spring application you should check out my session.

![spring-one-tour.png](./spring-one-tour.png)

## Around the Web

### 📝 Articles

- [Brain to the Cloud - Part I - Project Intro and Architectural Overview](https://blogs.oracle.com/developers/post/brain-to-the-cloud-part-i-project-intro-and-architectural-overview)
- [Brain to the Cloud - Part II - How I Uploaded My Brain to the Cloud](https://blogs.oracle.com/developers/post/brain-to-the-cloud-part-ii-how-i-uploaded-my-brain-to-the-cloud)
- [Brain to the Cloud - Part III - Examining the Relationship Between Brain Activity and Video Game Performance](https://blogs.oracle.com/developers/post/brain-to-the-cloud-part-iii-examining-the-relationship-between-brain-activity-and-video-game-performance)

### 🎬 Videos

- [Migrating from javax to Jakarta namespace](https://www.youtube.com/watch?v=mukr2Q_zBm4)
- [ϟ Enlightning: How Do You Add Persistent Storage to Your Kubernetes Application?](https://www.youtube.com/watch?v=q9pYsss8huk)

### 🎙 Podcasts

- [Microsoft Azure Developer Advocate Mark Heckler](https://bootifulpodcast.fm/#/episodes/515b6730-e7b2-42aa-a569-45d1b4cf2cb7)
- [Elastic's Felix Barnsteiner on APM for Spring Developers](https://bootifulpodcast.fm/#/episodes/3d24a6ae-2971-45e5-acd7-cbcc789e3587)

### 💻 Projects

- [Go 1.18 Release Notes](https://go.dev/doc/go1.18)

### 👨🏼‍💻 Conferences

- [Oracle Developer Live](https://developer.oracle.com/developer-live/java-innovations-mar-2022)

## Until Next Week

Thanks for sitting down and sharing a cup of coffee with me my friend. I hope you enjoyed this installment of Coffee & Code and I will see you next Monday morning. If you have any links you would like me to include please [contact me](http://twitter.com/therealdanvega) and I might add them to a future newsletter. I hope you have a great week and as always friends...

Happy Coding<br/>
Dan Vega<br/>
danvega@gmail.com<br/>
[https://www.danvega.dev](https://www.danvega.dev/)
