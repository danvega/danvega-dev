---
slug: groovys-null-safe-operator
title: "Groovy's null safe operator"
published: true
date: 2013-08-20T06:08:00-04:00
tags: ["grails","groovy"]
excerpt: "Groovy's null safe operator"
cover:
---

The more years I get under my belt as a programmer the more I appreciate the smaller things a language has to offer. Today I want to look at Groovy's null safe operator. When you want to crawl an object graph you always have to be worried about the dreaded null pointer exception. First I want to take a look at this example in ColdFusion. In this example we are looking at the body of a method where we load up a user object. We want to grab the city of the user object but in each step of the object graph we need to make sure that call is not null before preceding.

```groovy
var city = "";
var user = entityLoadByPK("User",10);

if ( !isNull(user) ){
	if( !isNull( user.getAddress() ) ) {
		if( !isNull(user.getAddress().getCity() ) ) {
			city = user.getAddress().getCity();
		}
	}
}

return city;
```

In Groovy we can do this shorthand by using the null safe operator (?.). If the variable before the question mark is null it will not proceed and actually returns null for you. We could even shorten this statement more but you get the idea.

```groovy
def user = User.get(10)

return user?.address?.city
```

The Groovy language has so many little things like this that I am really starting to love. What are some of your favorite features in the language?
