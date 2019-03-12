const fs = require('fs');
const inquirer = require('inquirer');
const slugify = require('@sindresorhus/slugify')
const jsToYaml = require('json-to-pretty-yaml')
const prettier = require('prettier')
const chalk = require('chalk');
const log = console.log;
const error = chalk.bold.red;
const success = chalk.bold.green.inverse;


(async () => {
  const args = process.argv;
  let metaData = null;
  if (args.length < 3) {
    const {
      title,
      excerpt,
      tags
    } = await inquirer.prompt([{
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
        name: 'tags',
        message: 'Tags (comma separated):'
      }
    ])

    const slug = slugify(title)
    const createdOn = new Date()
    const year = createdOn.getFullYear()
    const month = `${createdOn.getMonth() + 1 < 10 ? "0" : ""}${createdOn.getMonth() + 1}`
    const day = `${createdOn.getDate() < 10 ? "0" : ""}${createdOn.getDate()}`
    const blogPostFolder = `./blog/${year}/${month}/${day}`;
    const listify = a => a && a.trim().length ? a.split(',').map(s => s.trim()).filter(Boolean) : null

    if (!fs.existsSync(blogPostFolder)) {
      fs.mkdirSync(blogPostFolder);
    }

    const yaml = jsToYaml.stringify({
      slug,
      title,
      date: createdOn.toISOString(),
      published: false,
      excerpt: excerpt,
      author: 'Dan Vega',
      tags: listify(tags),
      cover: ''
    })

    const markdown = prettier.format(`---\n${yaml}\n---\n`, {
      parser: 'markdown',
    })
    fs.writeFileSync(`${blogPostFolder}/${slug}.md`, markdown)

    success(`Post ${title} was created successfully`)
  }
})()
