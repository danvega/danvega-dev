---
slug: grails-generating-links-in-your-domain-class
title: "Grails: Generating links in your domain class"
published: true
date: 2014-03-31T09:03:00-04:00
tags: ["grails"]
excerpt: "Grails: Generating Links in your Domain Class"
cover:
---

I am working on coverting this site over to a grails applicaiton. While there are some good plugins out there I could of taken advantage of I decided to use this as a learning experience and write a ton of it from scratch. For the blog post itself we have some unique URLs that look like this

> /blog/2014/3/30/Grails-views-Controller-and-Action-name

This converts to /blog/year/month/day/slug. So first thing I needed to was setup a url mapping for this path. I also put some constraints on the parameters so we get exactly what we are looking for.

```groovy
// blog post
"/blog/$year?/$month?/$day?/$slug?"(controller:"blog", action:"show") {
    constraints {
        year matches:/\\d{4}/
        month matches:/\\d{1,2}/
        day matches:/\\d{1,2}/
        slug matches: /^\[a-z0-9-\]+$/
    }
}
```

Now in our controller or event our views I could do something like this to create a link to that blog post. This is going to be a big pain every single time I need to link to a post.

```html
<div class="blog">
	<div class="entry">
	<h2><a href="${createLink(uri:"> ${post.title} </a></h2>
		${raw(post.teaser)} ${raw(post.content)}
	</div>
</div>
```

So i set out to find an easier way to do this. It seems like the post object itself should know how to create its own link. So wouldn't it be nice if we could call post.createPermaLink()? I think that would be great so let's do it. First off we have no access to that createLink method in our domain class. We do however have ability to inject the [LinkGenerator](http://grails.org/doc/2.0.x/api/org/codehaus/groovy/grails/web/mapping/LinkGenerator.html) class and this class has a method called link that will do exactly what we are looking for. First thing we need to do is inject that class into our domain object as a transient property.

```groovy
package com.vega.blog

import com.vega.auth.User

import org.grails.comments.Commentable
import org.grails.taggable.Taggable
import org.codehaus.groovy.grails.web.mapping.LinkGenerator

class Post implements Commentable,Taggable {

    static transient LinkGenerator grailsLinkGenerator

}
```

Now we can create out method and use this class to generate this link for us.

```groovy
/\*\*
 \* Utility method that will handle creating a link to this post
 \* @return String
 \*/
String createPermalink(){
    def year = dateCreated\[Calendar.YEAR\]
    def month = dateCreated\[Calendar.MONTH\]
    def day = dateCreated\[Calendar.DATE\]

    grailsLinkGenerator.link(uri:"/blog/$year/$month/$day/$slug")
}
```

Finally in our view we have an easy way to generate that link. Pretty cool right?

```html
<div class="blog">
	<div class="entry">
		<h2><a href="${post.createPermalink()}">${post.title}</a></h2>
		${raw(post.teaser)} ${raw(post.content)}
	</div>
</div>
```
