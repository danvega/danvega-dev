---
title: Website Updates, New Content, Live Coding & SpringOne
slug: website-updates
date: "2022-05-16T07:30:00.000Z"
---

Happy Monday and welcome to the new bi-weekly newsletter. I decided to move this newsletter to every other Monday for a couple of reasons. First, it’s a lot of work and stress to produce this newsletter each week on top of everything else I am doing. Second, I just don’t think I have enough going on to warrant a newsletter every single week. When I get on the level of Ken Kousen (Hi, Ken 👋🏻) I will consider moving back to weekly. I’m going to try this for now but I would love your feedback.

This week I want to tell you about some long-overdue changes I made to the website, I did some live coding, wrote some blog posts, and released a few videos.

## Website Updates

Over the past couple of weeks, I had a chance to make some long-overdue updates to the website. I’m not sure when this happened but all of my inline code fences were displaying as blocks. I’m a little bit worried that nobody told me about this. I know the analytics tell me that I am getting a little under 50k visitors a month and not one of you noticed this 😳

This was an issue with the Gridsome plugin I was using and found out that I could turn of syntax highlighting for inline code fences. I did that and updated the styles to help it stand out for both light and dark modes. This should now be corrected for both my blog posts and newsletter archives on the web.

For as long as I can remember I have wanted to start updating some of my more popular older posts. Before I could do this I had to update the blog header. I was displaying a date there but that was the published date.

I now display the words “Published On” before this date so that viewers know when the article was published. If I go back and update the article you will now see “Updated On” and a 2nd date displayed. I like this information as a consumer of other blogs so I hope you will appreciate this.

With this change in place I went back and updated a few blog posts:

- [Spring Boot Command Line Runner](https://www.danvega.dev/blog/2017/04/07/spring-boot-command-line-runner/)
- [How to read JSON Data in Spring Boot and Write to a database](https://www.danvega.dev/blog/2017/07/05/read-json-data-spring-boot-write-database/)
- [Github Copilot for Java Developers](https://www.danvega.dev/blog/2021/11/08/github-copilot-java-developers/)

I will continue to do this for older blog posts when I can. It’s nice to bring them up to current versions of Spring Boot as well as add what I have learned over the years.

## New Content

### @Value Annotation in Spring Boot

Blog Post: [https://www.danvega.dev/blog/2022/05/11/spring-boot-value-annotation/](https://www.danvega.dev/blog/2022/05/11/spring-boot-value-annotation/)

`youtube:https://youtu.be/vLSyFktOm4g`

### Spring Data JPA Pagination

Blog Post: [https://www.danvega.dev/blog/2022/05/12/spring-data-jpa-pagination/](https://www.danvega.dev/blog/2022/05/12/spring-data-jpa-pagination/)

`youtube:https://youtu.be/oq-c3D67WqM`

## Live Coding

This past week I was able to get some more live coding under my belt. I think like most people there is a bit of anxiety when it comes to coding in public. With experience I am getting much more comfortable with it and even enjoying it at times!

### Tanzu TV - Code

This week I hoped on one of our tv shows called Code. This is a chance for us advocates to jump on and build something in public. We don’t have a script, guest or slides. Just me, you and some code. In this weeks session I built out some code I would use for some blog post and YouTube videos.

The first part was building out Spring Data JPA repositories. Once I had that in place I walked through how to do pagination in GraphQL.

`youtube:https://youtu.be/67GtZRgE0h0`

### Spring Office Hours

If you have been following along I have been running a little experiment called “Spring Office Hours” with my friend and coworker DaShaun. We were doing this on our own Twitch & YouTube channels and it was a chance to talk about what’s new in the world of Spring, demo off some code and answer your questions.

I’m happy to announce that [Spring Office Hours](https://tanzu.vmware.com/developer/tv/spring-office-hours/) is out of beta and we have been added to the Tanzu TV lineup on the [Tanzu Developer Center](https://tanzu.vmware.com/developer/). This past week was episode 01 and while I started off with some audio issues, we ended strong.

`youtube:https://youtu.be/qOlgTi6bC5U`

If you want to join us live for Episode 2 you can view the [episode page here](https://tanzu.vmware.com/developer/tv/spring-office-hours/0002/).

## SpringOne

This week I found out some amazing news about the upcoming SpringOne conference this December in San Francisco. I will be there in person and I will be doing something really cool that I can’t tell you about yet. I’m so excited about this and as soon as I can say something I will. With that said, I hope to see you all there!

### Call for Papers

Speaking of SpringOne our [Call for Paper](https://springone.io/2022/cfp)s is open now and closes on June 20, 2022. If you’re interested in speaking please submit a talk.

## Around the Web

### 📝 Articles

- [Ever wanted to rewrite a query in Spring Data JPA?](https://spring.io/blog/2022/05/02/ever-wanted-to-rewrite-a-query-in-spring-data-jpa)
- [Serverless With Spring Boot & AWS Lambda](https://apurvsheth.medium.com/serverless-with-spring-boot-aws-lambda-bc76c1de2b12)
- [Cloudflare: Announcing D1: our first SQL database](https://blog.cloudflare.com/introducing-d1/)
- [The Magic of Docker Desktop is Now Available on Linux](https://www.docker.com/blog/the-magic-of-docker-desktop-is-now-available-on-linux)

### 🎬 Videos

- [Cloud Native Crew: Episode 3, with Ben Hale](https://youtu.be/T9KItuTJe-8)
- [New in Spring Framework 6: Http interfaces & Declaritive Htttp Clients](https://www.youtube.com/watch?v=A1V71peRNn0)
- [Spring Boot Tutorial - Nice & Easy](https://www.youtube.com/watch?v=QuvS_VLbGko)
- [Cloud Native Crew - with Ben Hale](https://www.youtube.com/watch?v=T9KItuTJe-8)

### 🎙 Podcasts

- [Java Champion and Spring Katas legend Chandra Guntur](https://bootifulpodcast.fm/#/episodes/c82fb7d3-2854-4b31-8d5e-f183e7b87643)
- [EasyMock contributor, Java Champion, and Java luminary Henri Tremblay](https://bootifulpodcast.fm/#/episodes/aa1abf06-ca95-426c-b200-f3669ab3839d)

### 💻 Projects

- [Micrometer 1.9.0 Released](https://github.com/micrometer-metrics/micrometer/releases/tag/v1.9.0)
- [JEP 427: Pattern Matching for switch (Third Preview)](https://openjdk.java.net/jeps/427)

### 👩‍💻 Conferences

- [JavaScript and Friends Conference Registration is now open](https://www.javascriptandfriends.com/)!

## Until Next Week

Thanks for sitting down and sharing a cup of coffee with me my friend. I hope you enjoyed this installment of Coffee & Code and I will see you next Monday morning. If you have any links you would like me to include please [contact me](http://twitter.com/therealdanvega) and I might add them to a future newsletter. I hope you have a great week and as always friends...

Happy Coding<br/>
Dan Vega<br/>
danvega@gmail.com<br/>
[https://www.danvega.dev](https://www.danvega.dev/)

