#!/usr/bin/env node

const chalk = require('chalk')
const boxen = require('boxen')

const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'bold'
}

const data = {
  name: chalk.magenta.bold('               Prasenjit D Banik'),
  work: chalk.cyan.bold('Software Engineer @') + chalk.magenta.bold(' ThinkEmpire'),
  github: chalk.cyan.bold('https://github.com/') + chalk.magenta.bold('deanban'),
  linkedin: chalk.cyan.bold('https://linkedin.com/in/') + chalk.magenta.bold('p-d-banik'),
  web: chalk.magenta.bold('http://pdbanik.com/'),
  npx: chalk.bold('npx deanban'),
  labelWork: chalk.yellow.bold('      Work:'),
  labelGitHub: chalk.yellow.bold('    GitHub:'),
  labelLinkedIn: chalk.yellow.bold('  LinkedIn:'),
  labelWeb: chalk.yellow.bold('       Web:'),
  labelCard: chalk.yellow.bold('      Card:')
}

const newline = '\n'
const heading = `${data.name}`
const working = `${data.labelWork}  ${data.work}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

const output = heading + newline + newline + newline + working + newline + githubing + newline + linkedining + newline + webing + newline + newline + carding

console.log(chalk.magenta.bold(boxen(output, options)))