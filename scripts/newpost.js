const fs = require('fs');
const inquirer = require('inquirer');
const log = console.log;
const chalk = require('chalk');
const error = chalk.bold.red;
const success = chalk.bold.green.inverse;

(async () => {
  const args = process.argv;
  let metaData = null;
  if (args.length < 3) {
    metaData = await inquirer.prompt([{
        type: 'input',
        name: 'title',
        message: 'Post Title:',
      },
      {
        type: 'input',
        name: 'excerpt',
        message: 'Post Excerpt:'
      }, {
        type: 'input',
        name: 'createdOn',
        message: 'Post Date:',
        default: new Date()
      }, {
        type: 'input',
        name: 'tags',
        message: 'Tags:'
      }
    ])

    metaData.slug = slugify(metaData.title)

    const year = metaData.createdOn.getFullYear()
    const month = `${metaData.createdOn.getMonth() + 1 < 10 ? "0" : ""}${metaData.createdOn.getMonth() + 1}`
    const day = `${metaData.createdOn.getDate() < 10 ? "0" : ""}${metaData.createdOn.getDate()}`
    const blogPostFolder = `./blog/${year}/${month}/${day}`;

    if (!fs.existsSync(blogPostFolder)) {
      fs.mkdirSync(blogPostFolder);
    }

    if (!fs.existsSync(`${blogPostFolder}/${metaData.slug}.md`)) {
      fs.writeFileSync(
        `${blogPostFolder}/${metaData.slug}.md`,
        `---
slug: ${metaData.slug}
title: ${metaData.title}
date: ${metaData.createdOn.toISOString()}
published: false
excerpt:  ${metaData.excerpt}
tags: ${metaData.tags}
cover: 
---
`,
        (err) => {
          if (err) {
            return error(err)
          }
        }
      )

      success(`Post ${metaData.title} was created successfully`)
    }


  }
})()

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
