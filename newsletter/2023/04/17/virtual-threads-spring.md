---
title: Virtual Threads in Spring & Launching a New Blog!
slug: virtual-threads-spring
date: "2023-04-17T10:300:00.000Z"
---

Happy Monday and welcome to another edition of the newsletter. The weather in Northeast Ohio was amazing last week, just what my mental health needed. After spending a week in Atlanta for Devnexus, the continuation of good weather was a welcome change. I was able to run outside and it instantly put me in a better mood.

In this edition, I will discuss my latest video on Virtual Threads in Spring and introduce a new website I launched using Nuxt 3 + Notion.

## Content

### Virtual Threads in Spring Boot

It's been announced that [virtual threads are targeted for JDK 21](https://openjdk.org/jeps/444), which is exciting news as it means they might show up in Spring Framework 6.1 (also targeted for later this year). So it's about time we all learn about virtual threads and why we might care about them as Spring developers.

Project Loom aims to reduce the effort of writing, maintaining, and observing high-throughput concurrent applications. It introduces virtual threads as a solution to improve performance and scalability, particularly when dealing with blocking APIs commonly found in Spring MVC applications.

I wrote a [blog post](https://www.danvega.dev/blog/2023/04/12/virtual-threads-spring/) and created a video that walks through the thread-per-request model and how Virtual Threads are going to improve performance in our Spring MVC applications.

`youtube:https://youtu.be/Is5HXJhC3jE`

### GraphQL Client

I have been talking a lot lately about how to build GraphQL APIs but what happens when you need to call a GraphQL API within your Spring applications? It turns out that the Spring for GraphQL gives us an easy to use client based on the Web Client. You can use the appropriate version for whatever server transport you are using such as HTTP, WebSocket, RSocket.

`youtube:https://youtu.be/BuPItqaVeGo`

### YouTube Shorts

I love creating YouTube shorts because they are a different format and because they come in under 60 seconds they take much less time to produce. I’m still playing with different formats. Last week I created 2 shorts around some basic concepts in Java.

- [How to convert a String into an Integer in Java](https://youtube.com/shorts/WtWbR6UrT8E?feature=share)
- [Master Java String Comparison: Unlock the Power of the Equals Method in Under 60 Seconds!](https://studio.youtube.com/video/HuGWdsHGcm4/edit)

## Nuxt + Notion

Before I dive into the specifics I want to give you a little back story on this new project. When my wife and I had our first daughter we decided early on that she was going to stay home to take care of her. We feel very fortunate to be a position to have done this but my wife did need to leave her career behind. She graduated college as an english major and has always had a passion for writing.

This past Christmas I bought her a laptop and a book on writing and encouraged her to pursue her passion. I introduced her to Notion and all of the amazing features you get out of the box and showed her how to organize her content. She began writing about what she is passionate about and she happens to pretty amazing at all of them as well. She wanted to document her time being a Mom and everything that goes into that. With that she came up with the name Momoir (A memoir in Mom form) and This is My Momoir was born.

![This is my Momoir](./momoir.png)

Initially, I expected her to write a few blog posts before I started building the site. However, a couple of months passed, and she managed to write 50 blog posts! 🤯 She is incredibly productive, which made me rethink how I should approach building the site.

All the posts were already in Notion, so it didn't make sense to export them to another CMS. Additionally, I wanted her to be able to publish new content without me being a bottleneck. Therefore, I decided to use the [Notion API](https://developers.notion.com/) and make Notion the CMS for the site.

I chose Nuxt 3 because of my previous experience using it and because I find it to be a fantastic tool. The Nuxt team has thought of everything, and the developer experience is excellent.

The biggest challenge I faced was with Notion being so customizable. Everything in the API is returned as "blocks", which meant that for everything from paragraphs to images and videos, I had to write a custom component to render that block.

I have a lot to share with you about this project, so if you're interested in hearing the details, please let me know.

Recently, my wife celebrated her birthday and decided that it was a great time to launch the site. If you want to read more about it, you can visit her "[It's Our Birthday](https://www.thisismymomoir.com/blog/its-our-birthday)" post. I just want to publicly say how proud I am of you, Jen (I know you're reading this). It takes a lot to put yourself out there, and I absolutely love what you did with this project. I can't wait to see where it takes you!

## Around the web

### 🎬 Videos

I really enjoyed [this video](https://www.youtube.com/watch?v=oKYeGfZnznk) by Sean Cannel with Think Media where he discusses the painful truths about YouTube Short.

### 👨🏼‍💻 Projects

I thought [this repository](https://github.com/maciej-scratches/spring-boot-3.1-service-connection-demo) from Maciej was really interesting. This repository shows multiple ways how to set up and use Testcontainers in a Spring Boot application, including the new `@ServiceConnection` annotation.

### 🎙️ Podcasts

I really enjoyed [this podcast](https://www.youtube.com/watch?v=aMD0zdlrH-o) from Greg Turnquist on the Spring Boot Learning channel. In this episode Greg walks us through 5 of his pro tips for professional coders in 2023. Greg is a pro and it was great to hear his insight.

### 🐦 Tweet

[https://twitter.com/therealdanvega/status/1646867149766443008](https://twitter.com/therealdanvega/status/1646867149766443008)

## Until Next Week

I hope you enjoyed this newsletter installment, and I will talk to you in the next one. If you have any links you would like me to include please [contact me](http://twitter.com/therealdanvega) and I might add them to a future newsletter. I hope you have a great week and as always friends...

Happy Coding<br/>
Dan Vega<br/>
danvega@gmail.com<br/>
[https://www.danvega.dev](https://www.danvega.dev)

