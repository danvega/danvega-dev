const fs = require('fs')
const readdirp = require('readdirp')
const chalk = require('chalk')
const log = console.log
const error = chalk.bold.red
const success = chalk.bold.green.inverse

const replace = require('replace-in-file');
const yamlFront = require('yaml-front-matter');
const YAML = require('json-to-pretty-yaml');

let posts = [];
readdirp('./blog', {
    fileFilter: '*.md'
  })
  .on('data', (entry) => {
    posts.push('./blog' + '/' + entry.path);
  })
  .on('end', () => {
    updateFrontMatter();
  })

function updateFrontMatter() {

  posts.forEach(post => {
    fs.readFile(post, {}, (err, data) => {
      const fm = yamlFront.loadFront(data);
      console.log(fm);
      fm['objectID'] = '123456789';
      fm['modifiedOn'] = fm['date'];
      delete fm.__content;

      const frontMatter = YAML.stringify(fm);
      const regex = new RegExp('---[^)]+---', 'i');
      const updatedFrontMatter = '---\n' + frontMatter + '---\n'

      const options = {
        files: post,
        from: regex,
        to: updatedFrontMatter
      };
      try {
        const results = replace.sync(options);
        log(success('Replacement results:', results))
      } catch (error) {
        log(error('Error occurred:', error));
      }

    })
  })


}
