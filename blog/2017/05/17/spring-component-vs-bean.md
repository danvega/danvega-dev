---
slug: spring-component-vs-bean
title: "Spring Beans @Component vs @Bean"
published: true
date: 2017-05-17T09:00:06-04:00
updatedOn: 2023-03-15T12:00:00-04:00
tags:
  - Spring
  - Spring Boot
excerpt: "Spring Beans @Component vs @Bean"
cover: "./bean-vs-component.png"
keywords: Spring Framework, Spring Boot, Spring Beans, @Component, @Bean
---

In this article, you will learn what a Spring Bean is and what the annotations `@Bean` vs `@Component` are used for, and how to use them. Before we dive into how each of these annotations is used it’s important to understand what a Spring Bean is. If you haven’t had a chance to check out my [Spring Boot Crash Course](https://www.danvega.dev/blog/2023/03/09/spring-boot-crash-course/) I cover this topic in more!

## What is a Spring Bean? The Spring Framework

The Spring Framework was built on the principles of Inversion of Control (IoC) and Dependency Injection (DI). When your code depends on another class to function, that class is considered a dependency. Instead of creating an instance of the class yourself, you delegate that responsibility to the framework, creating an inverse of responsibility. This pattern emphasizes loose coupling between components, allowing for more modular and flexible code.

A Spring Bean is an object that is managed by the Spring IoC container, along with some metadata. The data that describes the bean has the following properties: The data that describes a Spring Bean has the following properties:

- **Class**: the class of the bean
- **Name**: the name of the bean
- **Scope**: the scope of the bean (e.g. singleton or prototype)
- **Constructor arguments**: any arguments that need to be passed to the constructor when creating the bean
- **Properties**: any properties that need to be set on the bean after it is created
- **Initialization method**: The `InitializingBean`interface lets a bean perform initialization work after the container has set all necessary properties on the bean.
- **Destruction method**: Implementing the `DisposableBean` interface lets a bean get a callback when the container that contains it is destroyed.

Beans are the building blocks of a Spring application, as they provide the necessary components and services that other parts of the application can use. Examples of beans might include a database connection pool, a service layer that handles business logic, or a controller that maps incoming requests to the appropriate handler method.

If you would like to learn more about Spring Beans, we suggest reading the [reference documentation](https://docs.spring.io/spring-framework/docs/current/reference/html/core.html#beans-definition) after finishing this article.

## Configuring Spring Beans

Now that you understand what beans are, you need to be able to create and configure them in your applications. As we learn what we should do, it's important to start with what we shouldn't do. In the following example, the post controller depends on the post repository to function. Whenever you see the `new` keyword, it should raise alarm bells in your head that something may be wrong.

```java
@RestController
@RequestMapping("/api/posts")
public class PostController {

    private PostRepository postRepository;

    public PostController() {
        this.postRepository = new PostRepository();
    }

}
```

While the code above may work for a simple use case, it is not a best practice and does not scale well. A big issue you will run into is when you write tests against your controller class. If you try to isolate the controller class, you will also bring along the post repository with it. If that repository is talking to a database, you will have inadvertently written a full-blown integration test instead of a unit test with a mock of the repository.

There are several ways to define and configure beans in a Spring application. One approach that was used in the past was to use XML configuration files, which specify the beans, their dependencies, and any associated properties. Another approach is to use Java configuration classes, which use annotations to define the beans and their dependencies. Finally, there are also annotations like `@Component` and `@Bean`that can be used to define beans directly within Java code.

### @Component Annotation

The @Component annotation is a class-level annotation. If you mark a class with `@Component` or any of the stereotype annotations (more on that below) the class will be auto-detected using classpath scanning.

```java
@Component
public class PostService {

}
```

Spring will now create an instance of the post service, which is a singleton by default, and make it available through the application context. If you need an instance of that class, you can obtain it through [dependency injection](https://tanzu.vmware.com/developer/guides/dependency-injection/).

```java
@RestController
@RequestMapping("/api/posts")
public class PostController {

    private final PostService postService;

    public PostController(PostService postService) {
        this.postService = postService;
    }
}
```

This approach becomes particularly valuable when dealing with large dependency graphs that would otherwise be difficult to manage manually. For instance, consider the case where `PostService` has a dependency on `PostRepository`. With Spring, you no longer have to worry about manually managing this dependency: as Spring creates an instance of the `PostService`, it can see that it requires a `PostRepository`, create an instance of that class, and provide it to the constructor automatically.

```java
@Component
public class PostService {

    private final PostRepository postRepository;

    public PostService(PostRepository postRepository) {
        this.postRepository = postRepository;
    }
}
```

There are specialized stereotype annotations that you can use that at the end of the day are also marked with the @Component annotation

- @Controller
- @RestController
- @Service
- @Repository

This means that you can update your `PostService` to use the service annotation and it will continue to work as expected.

```java
import org.springframework.stereotype.Service;

@Service
public class PostService {

    private final PostRepository postRepository;

    public PostService(PostRepository postRepository) {
        this.postRepository = postRepository;
    }
}
```

### @Bean Annotation

While the `@Component` is convenient and works it is a class-level annotation. What happens if you need to create a bean from a method call? The `@Bean` annotation is used to declare a bean in Spring. When applied to a method, this annotation specifies that the method returns a bean that should be managed by the Spring container. `@Bean` methods are usually declared within `@Configuration` classes.

In the following example, you are creating an instance of a `RestTemplate`. There are two options: create a new instance in each class where it is needed, or create a single instance of the class and ask for that instance wherever it is needed in the app. The latter option can be achieved by having Spring manage the `RestTemplate` instance for you.

```java
@Configuration
public class WebConfig {

    @Bean
    public RestTemplate restTemplate() {
        return new RestTemplateBuilder().build();
    }

}
```

If you forget to mark the class with `@Configuration` the bean will not be added to the application context. You might also see bean definitions in the main application class. In the following example, we are creating an instance of a command line runner. This is possible because the `@SpringBootApplication` annotation itself is annotated with `@Configuration`.

```java
@SpringBootApplication
public class Application {

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

	@Bean
	CommandLineRunner commandLineRunner() {
		return args -> {
			System.out.println("Hello 👋🏻");
		};
	}

}
```

## Resources

- [Spring Boot Crash Course](https://www.danvega.dev/blog/2023/03/09/spring-boot-crash-course/)
- [Spring Beans - Reference Documentation](https://docs.spring.io/spring-framework/docs/current/reference/html/core.html#beans-definition)
- [Spring Dependency Injection - Tanzu Dev Center Article](https://tanzu.vmware.com/developer/guides/dependency-injection/)
- [Spring Dependency Injection - YouTube Tutorial](https://youtu.be/TBlB2_4_Sqo)
- [Spring Constructor Injection - YouTube Tutorial](https://youtu.be/aX-bgylmprA)

## Conclusion

I hope that cleared up some things on when to use the `@Component` and `@Bean` annotations in Spring. We covered what a Spring Bean is, how to configure them, and why it's important to use dependency injection instead of creating instances of classes manually.

