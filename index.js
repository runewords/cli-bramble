#! /usr/bin/env node
const program = require('commander');
const download = require('download-git-repo');
const inquirer = require('inquirer');

inquirer.prompt([
    {
        type: 'input',
        name: 'author',
        message: '请输入作者名称'
    }
]).then(answers => {
    console.log(answers.author);
})

program.version('1.0.0', '-v, --version')
.command('init <name>')
.action((name) => {
    download('https://github.com/runewords/template-react.git', name, {clone: true}, (err) => {
        console.log(err ? 'Error' : 'Success')
    })
})

program.parse(process.argv)
