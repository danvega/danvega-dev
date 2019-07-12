const fs = require('fs');
const inquirer = require('inquirer');
const slugify = require('slugify')
const jsToYaml = require('json-to-pretty-yaml')
const prettier = require('prettier')
const chalk = require('chalk');
const log = console.log;
const error = chalk.bold.red;
const success = chalk.bold.green.inverse;


(async () => {
  const args = process.argv;
  if (args.length < 3) {
    const {
      title,
      manualSlug,
      excerpt,
      tags
    } = await inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'Post Title:',
      },
      {
        type: 'input',
        name: 'manualSlug',
        message: 'Slug (Leave blank to generate)'
      },
      {
        type: 'input',
        name: 'excerpt',
        message: 'Post Excerpt:'
      },
      {
        type: 'input',
        name: 'tags',
        message: 'Tags (comma separated):'
      }
    ])

    const slug = manualSlug === '' ? slugify(title).toLowerCase() : manualSlug.toLowerCase()
    const createdOn = new Date()
    const year = createdOn.getFullYear()
    const month = `${createdOn.getMonth() + 1 < 10 ? "0" : ""}${createdOn.getMonth() + 1}`
    const day = `${createdOn.getDate() < 10 ? "0" : ""}${createdOn.getDate()}`
    const blogPostFolder = `./blog/${year}/${month}/${day}`;
    const tagsList = tags.split(',').map(t => t.trim());

    if (!fs.existsSync(blogPostFolder)) {
      fs.mkdirSync(blogPostFolder, {
        recursive: true
      });
    }

    const yaml = jsToYaml.stringify({
      slug,
      title,
      date: createdOn.toISOString(),
      published: false,
      excerpt: excerpt,
      author: 'Dan Vega',
      tags: tagsList,
      cover: ''
    });

    const markdown = prettier.format(`---\n${yaml}\n---\n`, {
      parser: 'markdown',
      singleQuote: true
    });

    fs.writeFileSync(`${blogPostFolder}/${slug}.md`, markdown);

    log(success(`Post ${title} was created successfully`));

  } else {
    log(error('Please don\'t provide any arguments to the new post generator'));
  }
})()
