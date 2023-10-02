---
title: Docker Compose, TDD in Spring and Upcoming Speaking Engagements
slug: terrific-development-dan
date: "2023-10-02T07:00:00.000Z"
---

Happy Monday and welcome to another edition of the newsletter. This week will be a short week for me as we have a company day off this Friday. I have mentioned this before, but I truly enjoy working for VMware. They truly embody their company culture and pay attention to the small details.

In this episode, I would like to discuss Docker Compose, TDD in Spring, and some upcoming speaking engagements.

## Docker Compose

Last week, while putting together a small demo, I encountered an interesting issue. I was using the new Docker Compose module in Spring Boot to connect to a PostgreSQL database. The application was functioning perfectly, but when I attempted to connect to the database using the database tools in IntelliJ, I couldn't establish a connection.

Initially, I considered the possibility that the issue was related to Docker. I wondered if I needed to connect to the internal IP address of the containers instead of using localhost. However, that wasn't the problem either. After some head scratching, I eventually identified the cause of the issue. To help you understand what went wrong and how I resolved it, I have created the following tutorial on connecting to a database inside a Docker container.

`youtube:https://youtu.be/NOrwxSI_VIg`

## Spring Boot Testing

A few weeks ago, I created a tutorial on [how to structure your code](https://youtu.be/B1d95I7-zsw) in a Spring Boot application. Last week, I had the opportunity to continue the conversation on the [Podcast](https://tanzu.vmware.com/developer/tv/spring-office-hours) by inviting my friend Ted Young as a guest.

We started off the podcast by summarizing what I covered in the video, which focused on organizing code by package, either by layer or by feature. I was eager to hear Ted's perspective on this topic, and he provided some valuable insights.

Next, we delved into Hexagonal Architecture, an approach that Ted is a strong advocate for and frequently discusses. Although I haven't personally used this approach in my Spring Boot applications, I can see several benefits, particularly in terms of testing.

Inspired by watching a few videos on Ted's channel, I decided to create some testing videos of my own. The first video in this series, which focuses on Test Driven Development (TDD) in Spring, has already been published.

`youtube:https://youtu.be/-H5sud1-K5A`

I have already recorded a follow up to this video where we will go through integration testing with Testcontainers and that should be released today!

## Upcoming Conferences

This is going to be a busy few months to wrap up the year. Not only do I have everything that’s going on below but I also have bunch of in-person customer meetings that I am really looking forward. I will be [speaking](https://www.danvega.dev/speaking) at the following conferences so if you are in attendance please come say hi 👋🏻

- [Connect Tech](https://2023.connect.tech/) - October 24-26 2023
- [VMware Barcelona](https://www.vmware.com/explore/eu.html) - November 6-9 2023
- [CodeMash](https://codemash.org/) - January 9-12 2024

### SpringOne Tour Virtual

We’re still buzzing from the amazing energy at SpringOne at VMware Explore. If you made it out to Las Vegas, we were thrilled to have you be a part of the vibrant Spring developer community. If you weren’t able to make the event, there are still opportunities to learn from industry experts and connect.

The first stop on our SpringOne Tour is a virtual session where we’ll be featuring the latest advancements, best practices, and tools and techniques that are quickly becoming industry-standard. Our technical advocates, Spring engineers, and application development experts will bring you an in-depth look into the beauty of open source, with Spring Framework, Spring Boot 3, Kubernetes, Progressive Delivery and more, so you can innovate faster.

Join us virtually on October 17, 2023 by [registering for free using this link](https://springonetour.io/).

## Around the web

### 📝 Articles

I enjoyed [this article](https://stuartmarks.wordpress.com/2023/09/22/my-favorite-jdk-21-feature-javadoc-search-url/) by Stuart Marks where he talks about his favorite feature in JDK 21. The Javadoc Search got an upgrade and it’s own URL which means you can easily interact it with it using your own tools.

### ✍️ Quote of the week

> “The best way to appreciate your job is to imagine yourself without one.” – Oscar Wilde

### 🐦 Tweet

I’m really looking forward to a world where I can stand in a virtual room and teach all of the things I love to those willing to listen 🤩

https://twitter.com/therealdanvega/status/1707458829552685275

## Until Next Week

I hope you enjoyed this newsletter installment, and I will talk to you in the next one. If you have any links you would like me to include please [contact me](http://twitter.com/therealdanvega) and I might add them to a future newsletter. I hope you have a great week and as always friends...

Happy Coding<br/>
Dan Vega<br/>
danvega@gmail.com<br/>
[https://www.danvega.dev](https://www.danvega.dev)<br/>
