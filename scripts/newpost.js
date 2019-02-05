const fs = require('fs');

const title = process.argv[2];
const now = new Date();
const blogdir = './blog';

if( !title ) {
    throw 'Please enter a title';
}

const slug = slugify(title);

fs.writeFileSync(
`${blogdir}/${slug}.md`,
`---
slug: ${slug}
title: ${title}
date: ${now}
published: false
excerpt: 
tags: 
cover: 
---
`,
(err) => {
		if(err) {
			return console.error(err);
		}
}
);

console.log(`Post '${title}' was created.`);


// thank you - https://medium.com/@mhagemann/the-ultimate-way-to-slugify-a-url-string-in-javascript-b8e4a0d849e1
function slugify(string) {
	const a = 'àáäâãåèéëêìíïîòóöôùúüûñçßÿœæŕśńṕẃǵǹḿǘẍźḧ·/_,:;'
	const b = 'aaaaaaeeeeiiiioooouuuuncsyoarsnpwgnmuxzh------'
	const p = new RegExp(a.split('').join('|'), 'g')
	return string.toString().toLowerCase()
		.replace(/\s+/g, '-') // Replace spaces with
		.replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
		.replace(/&/g, '-and-') // Replace & with ‘and’
		.replace(/[^\w\-]+/g, '') // Remove all non-word characters
		.replace(/\-\-+/g, '-') // Replace multiple — with single -
		.replace(/^-+/, '') // Trim — from start of text .replace(/-+$/, '') // Trim — from end of text
}