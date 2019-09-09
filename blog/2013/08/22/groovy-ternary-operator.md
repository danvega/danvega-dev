---
slug: groovy-ternary-operator
title: "Groovy Ternary Operator"
published: true
date: 2013-08-22T13:08:00-04:00
tags: ["groovy"]
excerpt: "
				Groovy Ternary Operator		"
cover:
---

Another one of the great operators that more and more languages support is their ternary operator. The ternary is a conditional operator and often referred to as an inline if statement. Before we look at how to use it lets take a look at a common problem it helps us solve. There are often times when you want to set a variable to one value if an expression evaluates to true and another if its false. In pseudo code it might look something like this.

> If expression is true; set value to a else set value to b

Say we are displaying the weather to a user. We know the users state because we require it in our application but maybe they haven't told us exactly what city they live in. In the following examples (ColdFusion & Groovy) we check to see if the city is null. If it is we set the location to the state and if it is not we will use that.

```groovy
var location = '';

if ( isNull(user.getCity()) ){
	location = user.getState();
} else {
	location = user.getState();
}

def location

if( user.city == null ){
	location = user.state
} else {
	location = user.city
}
```

This is fine but its a lot of excess noise that we don't need. Both ColdFusion and Groovy support the ternary operator and I won't show it in both because its pretty easy to understand. If the expression before the ? evaluates to true state will be used and if it evaluates to false (we have a city) then city will be used.

```groovy
def location = (user.city == null) ? user.state : user.city
```

Groovy actually takes this one step further though . Most of the time we are doing checks like the one above. We have one value that we want to use (a default) but if it doesn't exist use another. In Groovy we can represent that default using ?:

```groovy
def location = user.city ?: user.state
```
