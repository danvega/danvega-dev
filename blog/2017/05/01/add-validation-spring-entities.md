---
slug: add-validation-spring-entities
title: "How to add validation to your Spring Entities"
published: true
date: 2017-05-01T16:37:13-04:00
tags: ['spring']
excerpt: "How to add validation to your Spring Entities"
cover: './luis-llerena-14779-760x507.jpg'
---

A student had a question about validating data at the domain level and so I thought it would share it with you.

> Hi Dan,  First of all thanks a lot for this great course. It really helped me to get into Spring. But now I'm facing a problem and didn't find a solution yet. I want to use for my DTO classes annotations like @NotNull (javax.validation.constraints) or custom annotations. But both don't work within spring boot. Do you know a good way or practice to solve this? Or is it too expensive to make these annotations work? If yes, is there a spring alternative for such annotations that execute a custom validation like a license-plate for instance?  I hope this question isn't too off-topic to this course and perhaps also interesting for another member of this course. Best wishes, Daniel  

Before we get started I just want to thank Daniel for the question. If you want to follow along with this project you can [grab the source code here](https://github.com/cfaddict/spring-boot-validation-demo). We are going to start a new project and select the Web, JPA & H2 dependencies. 

```xml
<dependencies>
	<dependency>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-actuator</artifactId>
	</dependency>
	<dependency>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-actuator-docs</artifactId>
	</dependency>
	<dependency>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-data-jpa</artifactId>
	</dependency>
	<dependency>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-web</artifactId>
	</dependency>

	<dependency>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-devtools</artifactId>
		<scope>runtime</scope>
	</dependency>
	<dependency>
		<groupId>org.projectlombok</groupId>
		<artifactId>lombok</artifactId>
	</dependency>
	<dependency>
		<groupId>com.h2database</groupId>
		<artifactId>h2</artifactId>
		<scope>runtime</scope>
	</dependency>
	<dependency>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-test</artifactId>
		<scope>test</scope>
	</dependency>
</dependencies>
```

## Validation

I am gong to create an entity called the city and the key here is to look at the state property. We are using an annotation on the state @NotNull. This says that we create a new city and try to save it that the state can't be null. 

```java
package com.therealdanvega;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

@Entity
@Data
public class City {

    @Id @GeneratedValue
    private Long id;
    public String name;
    @NotNull
    public String state;

    private City() {}

    public City(String name){
        this.name = name;
    }
}
```

I then create a Command Line Runner to insert a new record. I am intentionally not adding the state to this object. 

```java
package com.therealdanvega;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class ValidationApplication {

   public static void main(String[] args) {
      SpringApplication.run(ValidationApplication.class, args);
   }

   @Bean
   CommandLineRunner runner(CityRepository cityRepository){
       return args -> {
         cityRepository.save( new City("Cleveland") );
      };
   }
}
```

When we try and run this application you will see the following error. 

```bash
Caused by: javax.validation.ConstraintViolationException: Validation failed for classes [com.therealdanvega.City] during persist time for groups [javax.validation.groups.Default, ]
List of constraint violations:[
	ConstraintViolationImpl{interpolatedMessage='may not be null', propertyPath=state, rootBeanClass=class com.therealdanvega.City, messageTemplate='{javax.validation.constraints.NotNull.message}'}
```

This was so easy to do and the great thing is it doesn't stop there. If you want to add all kinds of validation to different properties you can. [Check out the documentation](https://docs.oracle.com/javaee/7/api/javax/validation/constraints/package-summary.html) to find a list of annotations you can add for validation. 

## Custom Validation

Most of the time the annotations provided will get the job the done. There are times when you need some type of custom validation done. In these cases, we can create our own custom validator and it's really easy to do.  Say on our City object we wanted an annotation where we can make sure the state was equal to "OHIO". I know this is a silly example but I want to keep it simple. This is what our domain object would look like now. 

```java
package com.therealdanvega;

import com.therealdanvega.validator.StateValidator;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

@Entity
@Data
public class City {

    @Id @GeneratedValue
    private Long id;
    public String name;

    @NotNull
    @StateValidator( value = "OHIO" )
    public String state;

    private City() {}

    public City(String name){
        this.name = name;
    }

    public City(String name, String state){
        this.name = name;
        this.state = state;
    }
}
```

Now we create our own annotation & StateValidatorCheck constraint. 

```java
package com.therealdanvega.validator;

import javax.validation.Constraint;
import javax.validation.Payload;
import java.lang.annotation.Documented;
import java.lang.annotation.Retention;
import java.lang.annotation.Target;

import static java.lang.annotation.ElementType.ANNOTATION_TYPE;
import static java.lang.annotation.ElementType.FIELD;
import static java.lang.annotation.ElementType.METHOD;
import static java.lang.annotation.RetentionPolicy.RUNTIME;

@Documented
@Constraint(validatedBy = StateValidatorCheck.class)
@Target({ METHOD, FIELD, ANNOTATION_TYPE })
@Retention(RUNTIME)
public @interface StateValidator {
    String message() default "{com.therealdanvega.state.message}";
    Class<?>[] groups() default {};
    Class<? extends Payload>[] payload() default {};
    String value() default "";
}
```

```java
package com.therealdanvega.validator;

import com.therealdanvega.City;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

public class StateValidatorCheck implements ConstraintValidator<StateValidator, String> {

    private String state;

    @Override
    public void initialize(StateValidator constraint) {
        this.state = constraint.value();
    }

    @Override
    public boolean isValid(String s, ConstraintValidatorContext constraintValidatorContext) {
        if( s.equalsIgnoreCase( this.state ))
            return true;

        return false;
    }
}
```

Now if we try and create a city object with a state other than OHIO we will get an error. 

```java
package com.therealdanvega;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class ValidationApplication {

   public static void main(String[] args) {
      SpringApplication.run(ValidationApplication.class, args);
   }

   @Bean
   CommandLineRunner runner(CityRepository cityRepository){
       return args -> {
         cityRepository.save( new City("Cleveland", "Tennesee") );
      };
   }
}
```

```bash
Caused by: javax.validation.ConstraintViolationException: Validation failed for classes [com.therealdanvega.City] during persist time for groups [javax.validation.groups.Default, ]
List of constraint violations:[
	ConstraintViolationImpl{interpolatedMessage='{com.therealdanvega.state.message}', propertyPath=state, rootBeanClass=class com.therealdanvega.City, messageTemplate='{com.therealdanvega.state.message}'}
```

## Conclusion 

As you can see its pretty easy to sprinkle in some validation in your Spring Boot applications. 

_**Question:** What are the challenges you face in validating data?_
