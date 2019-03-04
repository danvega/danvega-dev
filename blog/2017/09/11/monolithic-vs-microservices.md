---
slug: monolithic-vs-microservices
title: "When to use Microservices over Monolithic Architecture"
published: true
date: 2017-09-11T08:30:19-04:00
tags: [Software Development, Spring]
excerpt: "When to use Microservices over Monolithic Architecture"
cover: 
---

I am currently working on wrapping up a new section on MicroServices for [my new course on JHipster](https://therealdanvega.com/jhipster). We could easily create a whole course around MicroServices alone so I am trying to keep this to more of an introduction.  \[featured-image single\_newwindow="false" alt="MicroServices"\] I think one of the questions I hear most is "When should I use a MicroServices architecture in place of a Monolithic application?". In this article, we will review what both of these are as well as give some recommendations on when to use Monolithic and when to use MicrosServices. 

## Monolithic Architecture

A monolithic application is one that most of us are currently working on or have worked on in the past. Wikipedia defines a Monolithic application as:

> In software engineering, a monolithic application describes a single-tiered software application in which the user interface and data access code are combined into a single program from a single platform.

I don't know about you but these are the types of applications I have been building for almost 20 years now. Before we get too far I want you to take a deep breath and I am here to say there is nothing wrong with these types of applications. Please don't run out and start refactoring your monolithic applications because you keep hearing about Microservices flying around at every conference you visit.  [![Monolithic Application](./road-street-sign-way-1-1024x682.jpg)](https://therealdanvega.com/wp-content/uploads/2017/09/road-street-sign-way-1.jpg) It is often a good idea to start with a Monolithic Architecture because it is way less complex for teams and less moving parts. 

## Microservices Architecture

Wikipedia defines Microservices as:

> <span style="s1">Microservices</span> <span style="s2">is a variant of the service-oriented architecture (SOA) architectural style that structures an application as a collection of loosely coupled services. In a microservices architecture, services should be fine-grained and the protocols should be lightweight. The benefit of decomposing an application into different smaller services is that it improves modularity and makes the application easier to understand, develop and test. It also parallelizes development by enabling small autonomous teams to develop, deploy and scale their respective services independently. It also allows the architecture of an individual service to emerge through continuous refactoring. Microservices-based architectures enable continuous delivery and deployment.</span>

What a Microservice boils down to a is something does one thing very well and can live independent of the overall application. In the course, I used the following example.  <span style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;">We run a conference and for years we have been on this monolithic application that manages everything. We have been growing like crazy and it’s time for some big changes.</span> [![Microservices](./IMG_5429-1024x768.jpg)](https://therealdanvega.com/wp-content/uploads/2017/09/IMG_5429.jpg) When we first started out we built out the functionality to list out speakers, sessions and from that data build an agenda. As we are growing we think about adding the following functionality. 

*   Registration (We did this through 3rd party previously) 
*   Blog
*   Store
*   Pre-Conference Training
*   Store

As you can see those are not only new functions of our application but they seem like components that do one thing well and can function independently in our larger conference application. This is a great way for our organization and our different teams to develop and deploy independently of each other quickly. 

## When to use MicroServices

So now that we know a little bit more about each of these architecture types we need to answer our original question. When should we use Microservices over Monolithic? When I was doing research on this very question I came across [an article from Martin Fowler](https://martinfowler.com/bliki/MonolithFirst.html). If you don't know who Martin is he is probably one of the most brilliant minds in the Software Development world and author of a book that helped me out a lot.  In this article, Martin says the following: 

> As I hear stories about teams using a [microservices architecture](https://martinfowler.com/articles/microservices.html), I've noticed a common pattern.
> 
> 1.  Almost all the successful microservice stories have started with a monolith that got too big and was broken up
> 2.  Almost all the cases where I've heard of a system that was built as a microservice system from scratch, it has ended up in serious trouble.
> 
> This pattern has led many of my colleagues to argue that **you shouldn't start a new project with microservices, even if you're sure your application will be big enough to make it worthwhile. **.

The point of this is that just because Microservices are all the buzz these days it doesn't mean all new applications should start here. In fact as Martin states if you're starting with a Microservice out of the gate you're probably going to run into trouble. 

## Conclusion

We all suffer from shiny object syndrome from time to time. We hear the term MicroServices and we want to jump right in. I hope this article makes you think about when to use Microservices. _**Question**: Are you using MicroServices in your development today? If so what advice would you give to others?_