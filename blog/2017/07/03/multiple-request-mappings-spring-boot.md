---
slug: multiple-request-mappings-spring-boot
title: "Multiple Request Mappings in Spring Boot"
published: true
date: 2017-07-03T08:30:50-04:00
tags: ['spring']
excerpt: "Multiple Request Mappings in Spring Boot"
cover: './pexels-photo-450035-760x506.jpeg'
---

In this tutorial, we are taking a look at a student's question from my [Spring Boot Introduction Course](https://www.danvega.dev/spring-boot). The question was related to building out Spring Controllers and how to define multiple request mappings for a single method.

> "How can I create multiple request mappings for a single method?"

## Multiple Request Mappings

If you want to follow along with this tutorial you can create a simple Spring Boot project that includes the Web dependency. We know that we can use the [@RequestMapping](https://docs.spring.io/spring/docs/current/javadoc-api/org/springframework/web/bind/annotation/RequestMapping.html) annotation to map web requests onto specific handler classes and/or handler methods. If we wanted to map our home method to the root "/" we can do so using the following code. 

```java
package com.therealdanvega;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

    @RequestMapping("/")
    public String home() {
        return "Hello, World!";
    }

}

```

If you fire up this application and visit [http://localhost:8080/](http://localhost:8080/) you will see the string "Hello, World!" returned to the browser. What happens if you wanted to define 2 or more web requests to be handled by the same method? It turns out you can only use one annotation per method, so something like this will not work. 

```java
package com.therealdanvega;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

    @RequestMapping("/")
    @RequestMapping("/home")
    public String home() {
        return "Hello, World!";
    }

}
```

If we look at the Request Mapping class value will take an array of strings and defaults to an empty array.

```java
@AliasFor("value")
String\[\] path() default {};
```

So we can pass in an array of strings that represent web requests. 

```java
package com.therealdanvega;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

    @RequestMapping( {"/", "/home"} )
    public String home() {
        return "Hello, World!";
    }

}
```
Now if visit [http://localhost:8080/](http://localhost:8080/) or [http://localhost:8080/home](http://localhost:8080/home)  we should see the string "Hello, World!" printed to the browser window. 

## Multiple Request Mappings Screencast

https://www.youtube.com/watch?v=qmALVM38oec&t=1s

## Conclusion

There are some things that might not be apparent but as we saw in this tutorial we can quickly drill into the code and find a solution. This is one of the many reasons open source is so great.

_**Question:** Do you face any problems setting up request mappings? _
