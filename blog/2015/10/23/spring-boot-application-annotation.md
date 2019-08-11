---
slug: spring-boot-application-annotation
title: "Spring Boot Application Annotation"
published: true
date: 2015-10-23T09:08:37-04:00
tags: ["java","spring"]
excerpt: "Spring Boot Application Annotation"
cover: ./access-code-connection-1181467.jpg
---

I have been working a lot with Spring Boot lately so you may see a flood of posts from me on the subject (you have been warned). If you are looking at older example and create new projects you may have come across the Spring Boot Application Annotation. If you create a simple project your main class might look something like this.

```java
package com.therealdanvega;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class HelloSpringApplication {

    public static void main(String\[\] args) {
        SpringApplication.run(HelloSpringApplication.class, args);
    }
}
```

The Spring Boot Application Annotation is a convenience annotation that adds all of the following:

*    `@Configuration`  tags the class as a source of bean definitions for the application context.
*    `@EnableAutoConfiguration`  tells Spring Boot to start adding beans based on class path settings, other beans, and various property settings.
*    `@ComponentScan`  tells Spring to look for other components, configurations, and services in the the  `com.therealdanvega ` package.

If those 3 annotations look familiar to you its because the new annotation is the same as using those 3. It became so common to have to use those 3 on the main application class that they created the new one. It is perfectly fine to put the other 3 back especially if you get into a situation where you need to pass arguments to one of the annotations. In the following example I moved the 3 annotations back and customized the component scan to search 2 different packages instead of just the current one.

```java
package com.therealdanvega;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@EnableAutoConfiguration
@ComponentScan({"com.therealdanvega","com.foo.bar"})
public class HelloSpringApplication {

    public static void main(String\[\] args) {
        SpringApplication.run(HelloSpringApplication.class, args);
    }
}
```

If you ctrl + click (cmd+click on the mac) on the Spring Boot Application Annotation you will be taken to the class definition of that so you can see exactly what is going on there.

```java
package org.springframework.boot.autoconfigure;

import java.lang.annotation.Documented;
import java.lang.annotation.ElementType;
import java.lang.annotation.Inherited;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.AliasFor;

/\*\*
 \* Indicates a {@link Configuration configuration} class that declares one or more
 \* {@link Bean @Bean} methods and also triggers {@link EnableAutoConfiguration
 \* auto-configuration} and {@link ComponentScan component scanning}. This is a convenience
 \* annotation that is equivalent to declaring {@code @Configuration},
 \* {@code @EnableAutoConfiguration} and {@code @ComponentScan}.
 \*
 \* @author Phillip Webb
 \* @author Stephane Nicoll
 \* @since 1.2.0
 \*/
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@Documented
@Inherited
@Configuration
@EnableAutoConfiguration
@ComponentScan
public @interface SpringBootApplication {

	/\*\*
	 \* Exclude specific auto-configuration classes such that they will never be applied.
	 \* @return the classes to exclude
	 \*/
	Class<?>\[\] exclude() default {};

	/\*\*
	 \* Exclude specific auto-configuration class names such that they will never be
	 \* applied.
	 \* @return the class names to exclude
	 \* @since 1.3.0
	 \*/
	String\[\] excludeName() default {};

	/\*\*
	 \* Base packages to scan for annotated components. Use {@link #scanBasePackageClasses}
	 \* for a type-safe alternative to String-based package names.
	 \* @return base packages to scan
	 \* @since 1.3.0
	 \*/
	@AliasFor(annotation = ComponentScan.class, attribute = "basePackages")
	String\[\] scanBasePackages() default {};

	/\*\*
	 \* Type-safe alternative to {@link #scanBasePackages} for specifying the packages to
	 \* scan for annotated components. The package of each class specified will be scanned.
	 \* <p>
	 \* Consider creating a special no-op marker class or interface in each package that
	 \* serves no purpose other than being referenced by this attribute.
	 \* @return base packages to scan
	 \* @since 1.3.0
	 \*/
	@AliasFor(annotation = ComponentScan.class, attribute = "basePackageClasses")
	Class<?>\[\] scanBasePackageClasses() default {};

}
```
