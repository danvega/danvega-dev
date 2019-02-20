---
title: Creating multiple directories in node
slug: node-recursive-directories
date: 2019-02-20 08:00:00
published: true
excerpt: 
author: Dan Vega
tags: node,javascript
cover: 
---

 This is going to be a quick tip tutorial but I think its one that I want to share. I am in the middle of migrating close to 1,000 blog posts from WordPress => Gridsome, a static site generator. 
 
 As any good (lazy) developer would I did some searching for a migration script. With Gridsome being a pretty new project I knew that my chances of finding said script would be pretty slim. After spending about 10 minutes looking around I found that my assumptions were true. 

 Not to worry because I wasn't really doing anything that was Gridsome specific. What I wanted to do was convert a bunch of WordPress posts into Markdown. With all of the great blogs written on top of 



 https://github.com/konsalex/gatsby-wordpress-migrate


## Directory Format

I needed to stick to the fomrat that my existing posts were in which was /blog/year/month/day/slug. I also needed to make sure that parts of the date were formatted in the following format: 

* year: 4 digits
* month: 2 digits (0 padded for months < 10)
* day: 2 digits (same as month)

 Before I could even begin to worry about creating a new directory 


 ## Using node to write directories

 
 


