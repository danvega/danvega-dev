---
title: "Coffee & Code Newsletter: #9"
slug: "coffee-and-code-09"
date: "2019-09-22T07:00:00.000Z"
---

Welcome to Coffee and Code with me, Dan Vega. This newsletter is a little insight into what I was up to this week, things I found interesting and anything on my radar for the upcoming week. If you don't already have a cup of coffee grab one now and let's get to it.

## Previous Week

My focus this week was spent learning how to create and produce better videos. This will help me when creating course content but my main focus for the rest of this year and into 2020 is YouTube. I finished reading the book [YouTube Secrets](https://amzn.to/30cOJnR) this week and I really enjoyed it. I appreciate books that give you tangible action items and this book was packed full of them. I have a video coming out this week so make sure you [give me a follow on YouTube](http://www.youtube.com/therealdanvega) and let me know what you think about it.

### Gridsome

If you aren't aware, this website is built on a framework called [Gridsome](https://gridsome.org). This week Gridsome had a couple of really big things happen. First, the framework turned one on September 16 so if you have a chance send them some Birthday wishes.

The other big news of the week was the [release of version 0.7](https://gridsome.org/blog/2019/09/17/gridsome-v07/). There were a lot of really great features in this release but none bigger than the ability to use components in Markdown. This will allow us to create custom components that can be used in your markdown blog posts.

```md
---
title: A cool title
excerpt: A cool description
---
// Import any Vue Component. Even other .md files!
import YouTube from '~/components/YouTube.vue'
import AboutUs from '~/sections/AboutUs.md'

// Import any JSON if you need data.
import data from '~/data/youtube.json'

// Use front-matter fields anywhere.
# {{ $frontmatter.title }}
> {{ $frontmatter.excerpt }}

// Use your imported Vue Components.
<YouTube :id="data.id" />
<AboutUs />

Isn't it great? 🥳
```

This is going to open up a whole lot of possibilities and allow me to do a few things on the blog that I have wanted to do since I launched it. If anyone wants to see some blog posts or videos around this let me know.

## Around the Web

These are things I found cool around the web this week.

### Articles

- [Unveiling Dark](https://medium.com/darklang/unveiling-dark-e0be6f1e0b06)
- [Java on Visual Studio Code September Update](https://devblogs.microsoft.com/visualstudio/java-on-visual-studio-code-september-update/)
- [https://blog.pocketcasts.com/major-new-update/](https://blog.pocketcasts.com/major-new-update/)
- [Cascadia Code](https://devblogs.microsoft.com/commandline/cascadia-code/)

### Videos

- [Fighting Diabetes with Technology: Oracle Code One Keynote](https://www.youtube.com/watch?v=HjlqoCNHGqc)
- [Java Language Futures: 2019 Edition](https://www.youtube.com/watch?v=xlTBof3P4Xc)

### Podcasts

- [Money Lab: Share The YouTube Experiment Worked And Made $12K+](https://megaphone.link/LMM4290950291)

### Projects

- [SVG Porn](https://svgporn.com)
- [Hacktoberfest 2019](https://hacktoberfest.digitalocean.com/)

### Courses

### Conferences

- [Oracle Code One (YouTube Channel)](https://www.youtube.com/channel/UCdDhYMT2USoLdh4SZIsu_1g/videos)

### Follow This Person

I have known [Ray](https://www.raymondcamden.com/) for most of my development career and have always looked up to him as a mentor. He inspired me to start a blog I owe him a lot for his ColdFusion blogging platform. On top of being an awesome developer, he's even a better guy to know and I am lucky to call him a friend.

These days Ray blogs a lot about JavaScript and VueJS. I really enjoy following what Ray is up to and you will to.

[https://twitter.com/raymondcamden](https://twitter.com/raymondcamden)

## Until Next Week

Thanks for sitting down and sharing a cup of coffee with me my friend. I hope you enjoyed this installment of Coffee & Code and I will see you next Sunday morning. If you have any links you would like me to include please contact me and I might add them to a future newsletter. I hope you have a great week and as always friends...

Happy Coding<br/>
Dan Vega<br/>
danvega@gmail.com<br/>
[https://www.danvega.dev](https://www.danvega.dev/)
