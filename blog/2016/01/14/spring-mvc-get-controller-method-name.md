---
slug: spring-mvc-get-controller-method-name
title: "Spring MVC Get Controller & Method Name"
published: true
date: 2016-01-14T16:27:22-05:00
tags: ['java','spring']
excerpt: "How to get the current controller and method name Spring MVC Get Controller & Method Name"
cover: ./controller-cover.jpg
---

The one thing I really love about my [Spring Boot Introductory Course](https://www.udemy.com/spring-boot-intro/?couponCode=NEW_YEAR_29) is that my students are always asking me questions. I had this question come in recently and I thought we should take this chance to discuss it.

> Dan, Suppose you have header, footer and content templates. The header has the navigation bootstrap code. For example you have multiple tabs in the navigation i.e. "Admin" and "Customers". How do you make the tab visually active if you are on Customer page or vice versa when using templates? Thanks, AK

I have done a lot of Grails web development and If you know anything about that you will know that it's built on Spring MVC. Grails makes 2 very important variables available to your views

```html
${controllerName}
${actionName}
```

If these two variables were available to us in Thymeleaf that would make our job really easy right? Well sadly they are not so we need to look at a few alternatives. First we could manually set these variables in every method that sends content to a view.

```java
@Controller
@RequestMapping("/admin/posts")
public class AdminPostController {

	private PostService postService;

	@Autowired
	public AdminPostController(PostService postService) {
		this.postService = postService;
	}

	@RequestMapping("/")
	public String list(Model model, HttpServletRequest request) {
		model.addAttribute("posts", postService.list());
        model.addAttribute("controllerName", "AdminPost");
        model.addAttribute("actionName", "list");
		return "admin/post/list";
	}

}
```

And we can check the controller name and if it's that "section" we can add the active class.

```html
<li class="dropdown" th:class="${controllerName == 'AdminPost'} ? 'dropdown active' : 'dropdown'" sec:authorize="hasRole('ROLE\_ADMIN')">
```

While this works it seems like a lot of work to have to set those variables in every single method. The http servlet request is made available in the view template so we can also do something like this.

```html
<li class="dropdown" th:class="${#httpServletRequest.requestURI.contains('/admin/posts/')} ? 'dropdown active' : 'dropdown'" sec:authorize="hasRole('ROLE\_ADMIN')">
    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Admin <span class="caret"></span></a>
    <ul class="dropdown-menu">
        <li><a href="/admin/posts/">Posts</a></li>
    </ul>
</li>
```

While this will work some of the times trying to match on the URI isn't always a good choice and to me this just seems like a hacky solution.

### My Solution

There might be other solutions to this puzzle but this is what I came up with and I think it works out pretty well. I like the idea of the controller and action names being available in my view but I don't want to set them on every request manually. Thankfully we can create an interceptor to do this for us. We are extending the HandlerInterceptorAdapter which gives us the ability to override the post handle method. In this method I am going to set the controller and action(method) name and send it to the view using ModelAndView.

```java
package com.therealdanvega.interceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

public class BaseInterceptor extends HandlerInterceptorAdapter {

	public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
		String controllerName = "";
		String actionName = "";

		if( handler instanceof HandlerMethod ) {
			// there are cases where this handler isn't an instance of HandlerMethod, so the cast fails.
			HandlerMethod handlerMethod = (HandlerMethod) handler;
			//controllerName = handlerMethod.getBean().getClass().getSimpleName().replace("Controller", "");
			controllerName  = handlerMethod.getBeanType().getSimpleName().replace("Controller", "");
			actionName = handlerMethod.getMethod().getName();
		}

		modelAndView.addObject("controllerName", controllerName );
		modelAndView.addObject("actionName", actionName );
	}

}
```

There was one issue I found doing this. At first I was setting the controller using the following code.

```java
controllerName = handlerMethod.getBean().getClass().getSimpleName().replace("Controller", "");
```

This would work 99% of the time except when I was using Spring Security. When I was logged in Spring Security would wrap my controller with a proxy class and the name of my controller would look something like

```java
AdminPostController$$EnhancerBySpringCGLIB$$3ef51261
```

So I switched it up and got the actual type of the class which gave me what I needed. Now that you have the Base Interceptor created you need to register it.

```java
@Configuration
public class WebConfig extends WebMvcConfigurerAdapter {

	@Override
	public void addInterceptors(InterceptorRegistry registry) {
		registry.addInterceptor(new BaseInterceptor());
	}
}
```

That is all there was to it. Now in every view I had those two variables available. In my template I was able to do something like this

```html
<li class="dropdown" th:class="${controllerName == 'AdminPost'} ? 'dropdown active' : 'dropdown'" sec:authorize="hasRole('ROLE\_ADMIN')">
    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Admin <span class="caret"></span></a>
    <ul class="dropdown-menu">
        <li><a href="/admin/posts/">Posts</a></li>
    </ul>
</li>
```

I hope this helps and if you can think of any reasons **NOT** to do this or have a more elegant solution please let me know below.
