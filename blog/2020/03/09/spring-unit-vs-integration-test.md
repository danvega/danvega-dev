---
title: "Spring Boot Testing Basics: How to Unit Test & Integration Test REST Controllers"
slug: spring-unit-vs-integration-test
date: "2020-03-09T10:00:00.000Z"
published: false
excerpt: In this article, we're going to dive into the world of testing in Spring Boot, specifically looking at unit tests and integration tests.
author: "Dan Vega"
tags:
  - Spring Boot
cover: "./unit-vs-int.jpeg"
video: https://www.youtube.com/embed/pNiRNRgi5Ws
github: https://github.com/danvega/unit-vs-int
keywords: Java, Spring Boot, Spring Boot Testing, Unit Testing, Integration Testing
---

## Demystifying Unit Tests and Integration Tests in Spring Boot

Hello, friends! In this article, we're going to dive into the world of testing in Spring Boot, specifically looking at unit tests and integration tests. Is there a difference between the two? Should we care? Let's find out!

This topic was sparked by a tweet I sent out recently, pleading with people to stop calling certain tests "unit tests" when they involve Spring components such as Dispatcher Servlet and the request/response lifecycle. To me, these are more like integration tests, albeit isolated ones. So, our goal today is to create a simple REST controller, perform a proper unit test, and then build upon that to create an integration test as well.

## Creating a Simple REST Controller

Before we get started with writing tests, let's create a very simple Spring Boot application with a REST controller. Head over to the [Spring Initializr](https://start.spring.io/) and create a project. For this example, all we need is the **Web** dependency.

Let's create a basic `HelloController` class:

```java
public class HelloController {

    public String hello(String name) {
        return String.format("Hello, %s", name);
    }
}
```

This controller has one method, `hello()`, which takes a string argument `name` and returns a formatted string: `"Hello, " + name`. Notice that we haven't added any Spring annotations yet, such as `@RestController` or `@RequestMapping`. We'll get to that later.

## Writing a Unit Test

To create a unit test for our `HelloController`, follow these steps:

1. Create a test class for `HelloController`.
2. Create an instance of `HelloController` and invoke its methods.
3. Use assertions to check the output of the methods.

Here's a simple example:

```java
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

class HelloControllerTest {

    @Test
    void hello() {
        HelloController controller = new HelloController();
        String response = controller.hello("world");
        assertEquals("Hello, world", response);
    }
}
```

In this test, we're simply creating an instance of `HelloController`, calling its `hello()` method with the input "world," and checking that the expected output is "Hello, world." We don't involve any Spring components in this test, so this is a pure unit test.

The purpose of a unit test is to validate that each unit of the software performs as designed. A unit is the smallest testable part of any software. In our case, the smallest unit is the `hello()` method in our controller. This test ensures that the method works as expected when given a particular input.

## Adding Spring Components

Now that we have a working unit test, let's add some Spring components to our `HelloController`:

```java
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping("/hello")
    public String hello(@RequestParam(defaultValue = "world") String name) {
        return String.format("Hello, %s", name);
    }
}
```

We've added the `@RestController`, `@GetMapping`, and `@RequestParam` annotations. Now our controller is ready to accept HTTP GET requests at the "/hello" endpoint and respond with the appropriate message.

## Writing an Integration Test

With the Spring components in place, it's time to write an integration test for our `HelloController`. Unlike a unit test, an integration test involves the Spring framework and tests how the various components work together.

To create an integration test, follow these steps:

1. Create a test class for `HelloController` and annotate it with `@WebMvcTest` and `@ExtendWith(SpringExtension.class)`.
2. Autowire a `MockMvc` instance.
3. Perform HTTP requests using the `MockMvc` instance and check the expected output.

Here's an example integration test:

```java
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;

@WebMvcTest(HelloController.class)
@ExtendWith(SpringExtension.class)
class HelloIntegrationTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    void hello() throws Exception {
        mockMvc.perform(get("/hello"))
                .andExpect(status().isOk())
                .andExpect(content().string("Hello, world"));
    }
}
```

In this test, we use the `MockMvc` instance to perform an HTTP GET request to the "/hello" endpoint and check that the response is "Hello, world." Since this test involves Spring components, it's considered an integration test.

## Conclusion

In this article, we've covered the differences between unit tests and integration tests in a Spring Boot application. Unit tests are focused on testing the smallest units of functionality, while integration tests ensure that various components work together as expected. Both types of tests are valuable in ensuring the quality of your application, and it's important to know when to use each type.

Remember, it's not about what we call these tests, but rather understanding their purpose and how they fit into your testing strategy. Happy coding, and stay curious!

