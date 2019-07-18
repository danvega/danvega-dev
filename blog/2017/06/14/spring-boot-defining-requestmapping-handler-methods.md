---
slug: spring-boot-defining-requestmapping-handler-methods
title: "Spring Boot Defining @RequestMapping handler methods"
published: true
date: 2017-06-14T08:36:35-04:00
tags: ['spring']
excerpt: "Spring Boot Defining @RequestMapping handler methods"
cover: './pexels-photo-374074-760x506.jpeg'
---

In this article, we are going to take a look at what happens when you define a method that is annotated with @RequestMapping. @RequestMapping is one of the most widely used Spring MVC annotation. RequestMapping annotation is used to map web requests onto specific handler classes and/or handler methods. If you have done any work with Spring MVC you have undoubtedly come across this annotation before. The reason we are talking about this is that I had a student ask me the following question.

> Hi Dan, I'm really enjoying the course so far but there are a few things that don't quite fit to my head. In the lesson 43 (Error Handling) we have  `CustomErrorController`   class where we are injecting  `ErrorAttributes`   inside the constructor via  `@AutoWired`   so I assume that Spring boot will initialize that object automatically for us. Now what about the  `error()`   method? How did the parameters  `Model model`  and  `HttpServletRequest request`   came up? Is spring boot going to initialize those objects for us too? (apparently yes cause they just work) But then why  `@AutoWired`   is not needed to automatically inject those objects just like what happens in constructor?  Furthermore how could I know that I need the above 2 parameters? Could there be any further parameters in the  `error`  method that I should be aware of? If yes would they be initialized automagically like  `Model`   and  `HttpServletRequest`  ? Thanks

## @RequestMapping Examples

Before we dive into the solution and explain why this happening I want to catch the rest of you up with what is going on. I had a custom error controller that I was using that looked something like this. 

```java
@Controller
public class CustomErrorController implements ErrorController {

    private static final String ERROR_PATH = "/error";
    private static final String ERROR_TEMPLATE = "customError";

    private final ErrorAttributes errorAttributes;

    @Autowired
    public CustomErrorController(ErrorAttributes errorAttributes) {
        this.errorAttributes = errorAttributes;
    }

    @RequestMapping(ERROR_PATH)
    public String error(Model model, HttpServletRequest request) {
        return "SOME_ERROR_STRING";
    }

    @Override
    public String getErrorPath() {
        return null;
    }

}
```

As the student pointed out when we create the constructor and annotated it with @Autowired (No longer needed in Spring 4.3+) Spring managed the constructor injection of the managed bean ErrorAttributes. This is one of those beans that the Spring Framework manages for us.  So now the question is I have this method called error and in this method, I have some method arguments, so how are those being supplied for me? 

### Defining @RequestMapping handler methods

To understand the problem we must first understand that the _Custom Error Controller_ I created is nothing special. In fact, we can create a regular controller and it would act the same. This is an example of a Home Controller I used to respond to the "/home" request. If you look closely now though, I have 2 different method parameters being passed to my controller. What the heck is going on here? 

```java
package com.therealdanvega.controller;

import com.therealdanvega.service.HomeService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Controller
public class HomeController {

    private HomeService homeService;

    public HomeController(HomeService homeService) {
        this.homeService = homeService;
    }

    @RequestMapping("/home")
    public String home(HttpServletRequest request, HttpServletResponse response) {
        return this.homeService.getMsg(request);
    }

}
```

The real secret to what is happening here is the @RequestMapping annotation on the method. If you look back to our CustomErrrorController you will see the same annotation on the method in question. If you take a look at the Spring MVC documentation on [@RequestMapping handler Methods](http://docs.spring.io/spring/docs/current/spring-framework-reference/html/mvc.html#mvc-ann-methods): 

> @RequestMapping handler methods can have very flexible signatures. Most arguments can be used in arbitrary order with the only exception being BindingResult arguments.

What this means is that when we define a method and use the annotation @RequestMapping we have access to a number of method arguments that help us get information like;

*   Request & Response Objects
*   Web Request
*   Session Information
*   Http Method
*   Path Variables
*   Request Parameters
*   Request Body
*   Model
*   Errors
*   Binding Results
*   Much More...

If you want to see all of the available [@RequestMapping handler methods check out the documentation here](http://docs.spring.io/spring/docs/current/spring-framework-reference/html/mvc.html#mvc-ann-methods).

## Conclusion

Spring does a lot of things behind the scenes for us and I completely understand how this can be confusing at times. You can usually find the answers in the documentation but at the same time, we don't always know what to look for. I can assure you I don't remember all of the method arguments and that is why I have that link above bookmarked. 

_**Question:** Is there anything that happens behind the scenes in Spring you don't quite understand?_
