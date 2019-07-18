---
slug: use-hikaricp-next-spring-boot-project
title: "How to use HikariCP in your next Spring Boot project"
published: true
date: 2017-07-26T08:16:50-04:00
tags: ['java', 'spring']
excerpt: "How to use HikariCP in your next Spring Boot project"
cover: './pexels-photo-169976-760x506.jpeg'
---

Performance is something we are all trying to improve on when it comes to our applications. It turns out that there is a very reliable, high performance JDBC connection pool out there that we can start using in our Spring Boot applications today. In this article, we are going to take a look at HikariCP, the CP standing for a connection pool. [HikariCP](https://brettwooldridge.github.io/HikariCP/) is a “zero-overhead” production-quality connection pool.

## HikariCP

As I mentioned earlier, [HikariCP](https://brettwooldridge.github.io/HikariCP/) is a reliable, high-performance JDBC connection pool. What is a connection pool you ask?

> In software engineering, a **connection pool** is a cache of database connections maintained so that the connections can be reused when future requests to the database are required. Connection pools are used to enhance the performance of executing commands on a database. - [Wikipedia](https://en.wikipedia.org/wiki/Connection_pool)

If you weren't already aware you are using the Tomcat pooling Datasource by default. Here is some great information [from the documentation](http://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#boot-features-connect-to-production-database) that explains how this is selected.  Production database connections can also be auto-configured using a pooling  `DataSource` . Here’s the algorithm for choosing a specific implementation:

*   We prefer the Tomcat pooling  `DataSource`  for its performance and concurrency, so if that is available we always choose it.
*   Otherwise, if HikariCP is available we will use it.
*   If neither the Tomcat pooling datasource nor HikariCP are available and if Commons DBCP is available we will use it, but we don’t recommend it in production and its support is deprecated.
*   Lastly, if Commons DBCP2 is available we will use it.

If you use the  `spring-boot-starter-jdbc`  or  `spring-boot-starter-data-jpa`  ‘starters’ you will automatically get a dependency to  `tomcat-jdbc` .

## Using HikariCP in Spring Boot

To use HikariCP you can simply add the following dependency to a new or existing project.  

```xml
<dependency>
	<groupId>com.zaxxer</groupId>
	<artifactId>HikariCP</artifactId>
	<version>2.6.1</version>
	<scope>compile</scope>
</dependency>
```

You used to have to configure your own Datasource but thanks to the magic of AutoConfiguration you don't have to anymore. Next, we are going to open up application.properties and add the following configuration. 

```java
spring.datasource.type=com.zaxxer.hikari.HikariDataSource
```

Now if you run the application you should see something like this in the console letting us know our change was accepted. 

```bash
2017-07-26 07:57:26.345  INFO 1015 --- \[           main\] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Starting...
2017-07-26 07:57:26.505  INFO 1015 --- \[           main\] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Start completed.
```

## Spring Boot AutoConfiguration

We have talked about AutoConfiguration before but I think this is a good chance to look at another great example of it in use. Remember how I said earlier that in the old days you might have had to configure your own Datasource? So why don't we have to do this now?  If you do a quick search in IntelliJ (double tap shift key) and look for DataSourceConfiguration.class in (org.springframework.boot.autoconfigure.jdbc) you will find the following block of code.

```java
@ConditionalOnClass({HikariDataSource.class})
@ConditionalOnProperty(
    name = {"spring.datasource.type"},
    havingValue = "com.zaxxer.hikari.HikariDataSource",
    matchIfMissing = true
)
static class Hikari extends DataSourceConfiguration {
    Hikari() {
    }

    @Bean
    @ConfigurationProperties(
        prefix = "spring.datasource.hikari"
    )
    public HikariDataSource dataSource(DataSourceProperties properties) {
        return (HikariDataSource)this.createDataSource(properties, HikariDataSource.class);
    }
}
```

The @ConditionalOnClass is saying we are only going to create this class if this class exists on the classpath. Earlier we defined HikariCP as a dependency and this now becomes a true condition. The @ConditionalOnProperty is now looking for that property and looking for a specific value. When we defined that property in application.properties, that statement was now true.  You can see that it creates a Datasource and uses the prefix "spring.datasource.hikari" for its configuration properties. This means all of the configuration Hikari exposes can be used using that prefix. The HikariCP documentation tells us that we can change the connection timeout property so in our application.properties we can simply use 

```java
spring.datasource.hikari.connection-timeout=60000
```

## Spring Boot 2.0

Spring Boot 2.0 is coming soon and when it ships we will no longer need to worry about this. This is because they are going to move to [HikariCP by default](https://github.com/spring-projects/spring-boot/issues/6013). This is just another awesome example of the Spring Boot team providing us with sensible defaults.  Want to learn more about [Spring Boot 2.0, click here](https://www.danvega.dev/spring-boot-2-0).

## HikariCP Spring Boot Screencast

https://youtu.be/Q8Dx8EzIveM  

## Conclusion

In conclusion AutoConfiguration is really awesome and helps save us some valuable time. In this case, we simply declared a dependency and a property and Spring Boot wired up a Hikari Datasource for us.
