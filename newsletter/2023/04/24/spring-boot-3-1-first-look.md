---
title: 🔥 What’s new in Spring Boot 3.1
slug: spring-boot-3-1-first-look
date: "2023-04-17T10:30:00.000Z"
---

Happy Monday and welcome to the start of another work week. I hope you had a wonderful weekend. Mine was great - this past weekend I had my first daddy-daughter dance with my oldest daughter, Bella (5). It was an amazing night and she was so excited to get “fancied up”, as she says. We had a delicious meal with friends, an ice cream bar, hula hoops, and of course, we danced the night away.

![Daddy Daughter Dance 2023](./daddy-daughter-dance.png)

This week, I want to talk to you about the newly released Spring Boot 3.1 RC1. Additionally, I will discuss what I worked on last week, which includes Spring Beans, Spring Security, and YouTube Shorts.

## Spring Boot 3.1.0 RC 1

Spring Boot 3.1.0 RC 1 has just been released. If you want to learn more about it, you can check out the [release notes](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-3.1.0-RC1-Release-Notes). I will highlight some of the new features in this release.

- **Testcontainers** - I’m a big fan of using Testcontainers in my integration tests to provide a lightweight throwaway database or any other container that I need. In Spring Boot 3.1 it’s also possible to use them at development time.
- **Docker Compose** - A new module `spring-boot-docker-compose` provides integration with Docker Compose. When your app is starting up, the Docker Compose integration will look for a configuration file in the current working directory. No more starting your application only to see an error because you forgot to run `docker compose up`.
- **SSL Configuration** - SSL trust material such as Java KeyStores and PEM-encoded certificates can now be configured using properties and applied to connections of various types such as embedded web servers, data services, `RestTemplate`
   and `WebClient`
   in a more consistent manner.
- **Docker Images** - There are some nice improvements to customizing the Docker Image using Maven or Gradle.
- **Dependency Upgrades** - Spring Boot 3.1.0-RC1 moves to new versions of several Spring projects

We plan to discuss this topic in more depth during [Spring Office Hours this week](https://youtube.com/live/lLykB3GI1Cs?feature=share). Please join us live or watch the replay. I also plan to create one or two videos for my [YouTube channel](https://www.youtube.com/@danvega). If you haven't subscribed yet, what are you waiting for?

## Content Creation Machine

Here are the highlights of the content I worked on last week.

### Spring Beans

In a recent video, I discussed Spring Beans and how to create them using @Component vs @Bean annotations. Have you ever come across a term that seemed confusing, only to realize later that it was quite simple? For me, Spring Beans was one of those terms when I first started out. In this video, I delve deeper into the topic. I also covered Spring Beans in my [Spring Boot Crash Course](https://youtu.be/UgX5lgv4uVM), but that is a four-hour long video.

`youtube:https://youtu.be/CWEQ-1vff1o`

### Multiple Spring Security Configs

Recently, I have discussed how to configure Spring Security using the new component model. This video covers a couple of scenarios where you may need multiple security configurations and how to create them. In previous versions of Spring Security, this was difficult, but it is now much easier.

`youtube:https://youtu.be/PczgM2L3w60`

### Shorts

I love making YouTube shorts because they allow me to produce videos in a shorter time cycle. They also provide an opportunity for me to try out new ideas and editing techniques. Last week, I produced a short video on how to pronounce "char" in Java, and it was so much fun. I was literally laughing out loud in between takes. Moreover, they have been receiving a good number of views, which is encouraging. So, be on the lookout for more videos this week!

- [How to pronounce char in Java](https://youtube.com/shorts/YTcoGEIuRUQ?feature=share)
- [Java String .contains() method](https://youtube.com/shorts/nSYpFhlUFzM?feature=share)

## Around the web

### 🎬 Videos

I really enjoyed this 60 Minutes piece on [The AI revolution](https://www.youtube.com/watch?v=880TBXMuzmk). Google's CEO, Sundar Pichai, believes AI's impact will depend on human nature and that the AI revolution is coming quickly.

### 👨🏼‍💻 Projects

As a huge fan of Vue and Nuxt, it was great to see the Nuxt team release another really impressive minor update. Check out this [blog post](https://nuxt.com/blog/v3-4) to learn about the new features in Nuxt 3.4.

### 🐦 Tweet

I’m really enjoying this BenQ ScreenBar Plus. I thought it would just be for nighttime productivity but ever since I added blackout curtains to my office It comes in handy at all times of the day!

[https://twitter.com/therealdanvega/status/1650292153535324160](https://twitter.com/therealdanvega/status/1650292153535324160)

## Until Next Week

I hope you enjoyed this newsletter installment, and I will talk to you in the next one. If you have any links you would like me to include please [contact me](http://twitter.com/therealdanvega) and I might add them to a future newsletter. I hope you have a great week and as always friends...

Happy Coding<br/>
Dan Vega<br/>
danvega@gmail.com<br/>
[https://www.danvega.dev](https://www.danvega.dev)

