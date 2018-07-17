#! /usr/bin/env node

const program = require('commander')
const inquirer = require('inquirer')
const chalk = require('chalk')
program
    .command('test')
    .alias('t')
    .description('创建新的测试命令')
    .option('--name [moduleName]')
    .option('--opt1', '启用第一个')
    .option('--opt2', '启用第二个')
    .action(option => {
        var config = Object.assign({
            moduleName: null,
            description: '',
            opt1: false,
            opt2: false
        }, option)
        var promps = []
        console.log(chalk.red('开启前端工程化之路'))
        if(config.moduleName !== 'string') {
              promps.push({
                type: 'input',
                name: 'moduleName',
                message: '请输入测试命令名称',
                validate: function (input){
                    if(!input) {
                        return '不能为空'
                    }
                    return true
                }
              })
        }
        if(config.description !== 'string') {
            promps.push({
              type: 'input',
              name: 'moduleDescription',
              message: '请输入描述文字'
            })
        }
        if(config.opt1 === false && config.opt2 === false) {
          promps.push({
            type: 'list',
            name: 'choiceOptions',
            message: '想选择什么呢',
            choices: [
              {
                name: '选择1',
                value: '1'
              },
              {
                name: '选择2',
                value: '2'
              },
              {
                name: '其他',
                value: 'other'
              }
            ]
          })
        }
        inquirer.prompt(promps).then(function (answers) {
          console.log(answers)
        })
    })
    .on('--help', function() {
      console.log('  Examples:')
      console.log('')
      console.log(chalk.bgBlue('entry t moduleName'))
      console.log('$ entry t moduleName')
    })
    program.parse(process.argv)