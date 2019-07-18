---
slug: spring-angular-applications
title: "How to start writing Angular & Spring Applications"
published: true
date: 2017-05-03T09:00:37-04:00
tags: ['Angular', 'spring']
excerpt: "How to start writing Angular & Spring Applications"
cover: './carl-heyerdahl-181868-760x507.jpg'
---

If your story reads anything like mine this is going to be an exciting post. I have worked with Angular JS 1.x in both projects and large scale projects at work. I honestly liked the framework but always felt that it was a bit too boilerplate and complex. Now that Angular 2, and subsequently Angular 4 has been released I have spent the last few months catching up. If you ever felt like I did towards Angular 1.x I am here to tell you that it is time to give Angular another look.  I absolutely love building Angular 2 & Spring Applications and in this article, I am going to give you some resources to help kick start your journey. 

## Getting Started with Angular and Spring Boot

We are going to walk through some basics and give you lots of resources to start looking into. At the end of this article, you will find a screencast I did where I walk through a simple Tasks application written in Spring Boot & Angular. If you want to check out the source code for this application you can [grab it here](https://github.com/cfaddict/spring-angular2-tasks). 

## Spring Boot

Any great modern application is going to need a proven application framework on the back end. Spring Boot is an amazing project that helps us quickly get our Spring Framework Applications up and running.  In our case, we will use the [Spring Initializr](http://start.spring.io/) to help bootstrap our application. We can do this right in our [favorite IDE](https://www.jetbrains.com/idea/) or directly from [the website](http://start.spring.io/). In Spring we are going to create a REST Controller that can handle a call from our Angular application.  This controller will accept a GET request and return to it a list of Tasks. 

```java
@RestController
@RequestMapping("/api/tasks")
public class TaskController {

    private TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping( value = {"","/"})
    public Iterable<Task> listTasks(){
        return taskService.list();
    }
}
```

This will call a service and repository that will fetch our 4 tasks from the database. We are going to load our initial data by using a Command Line Runner. 

```java
@SpringBootApplication
public class TasksApplication {

	public static void main(String\[\] args) {
		SpringApplication.run(TasksApplication.class, args);
	}

	@Bean
	CommandLineRunner runner(TaskService taskService){
		return args -> {
			taskService.save( new Task(1L,"Create Spring Boot Application",true));
			taskService.save( new Task(2L,"Create Angular 2 Application",true));
			taskService.save( new Task(3L,"Run the demo application",true));
			taskService.save( new Task(4L, "Make 1 Million Dollars", false));
		};
	}
}
```

There is a little more going on but that is essentially our back end service. If you want to learn more about Spring Boot please check out some of these resources. 

### Spring Boot Resources

*   [Spring Boot Introduction Course](http://courses.danvega.dev/p/spring-boot-intro)
*   [Spring Boot Project Page](https://projects.spring.io/spring-boot/)
*   [Spring Boot Reference Guide](http://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/)
*   [Spring Boot API](http://docs.spring.io/spring-boot/docs/current/api/)

## Angular 2/4

The first thing you need to know is that Angular 1/2/4 JS is just going by Angular these days. So when I refer to the newest version of Angular from now on, I will just be calling it Angular.  As I said before I was never a huge fan of previous versions of Angular. With the new releases, writing components in TypeScript and the Angular CLI this is really a development cycle I can get behind.  The 1st thing I would do is work on getting the Angular CLI installed and your local development environment up and running. From there you can generate your first component. Everything is component based in Angular and here is my TypeScript component that I really enjoyed writing. 

```java
import { Component, OnInit } from '@angular/core';
import {Task} from "../task.model";
import {TaskService} from "../task.service";

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: \['./tasks-list.component.css'\]
})
export class TasksListComponent implements OnInit {
  tasks: Task\[\] = \[\];
  constructor(private taskService: TaskService) {
    // fetch our tasks from our Spring Boot Application
    taskService.getTasks()
        .subscribe(
            (tasks: any\[\]) => this.tasks = tasks,
            (error) => console.log(error),
            () => console.log('Task Service completed.')
        );
  }

  ngOnInit() {
  }

  getTaskClass(task: Task){
    let completed: string = 'list-group-item list-group-item-success';
    let incomplete: string = 'list-group-item list-group-item-danger';
    return task.completed ? completed : incomplete;
  }
}
```

I simply can't teach you everything you need to know about Angular in this blog post and that is the reason I being pretty vague here. I am going to leave you with some resources and my screencast below but please feel free to ask any questions you have. 

### Angular Resources

*   [Angular JS](https://angularjs.org/)
*   [Angular CLI](https://cli.angular.io/)
*   [Angular 2 Development with TypeScript](http://amzn.to/2qrYPPd)
*   [ng-book 2: The Complete Book on Angular 2](http://amzn.to/2qElhRq)
*   [Angular 4: The Complete Guide (Online Course)](https://www.udemy.com/the-complete-guide-to-angular-2/)

## Spring Boot & Angular Tasks Application

https://www.youtube.com/watch?v=v7X\_ZHdcNvc&t=25s

## Upcoming Course

I am currently working on a course that teaches you all about Spring Boot & Angular 4 development. We will show you how to get started and what it takes to build these projects from scratch. Then we will walk through an even better way to rapidly develop these applications so you can focus on writing business logic and not boilerplate code.  If you're interested in learning more please head over to the [course page](https://danvega.dev/jhipster) and signup for free. 

_**Question:** What are your biggest challenges in developing Spring Boot & Angular applications? _
