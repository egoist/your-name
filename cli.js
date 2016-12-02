#!/usr/bin/env node
const path = require('path')
const cac = require('cac')
const random = require('random-item')
const termImg = require('term-img')
const chalk = require('chalk')
const Conf = require('conf')

const config = new Conf()

const cli = cac()

const names = [
  {
    name: '立花 瀧',
    romaji: 'Tachibana taki',
    image: path.join(__dirname, 'images/taki.png')
  },
  {
    name: '宮水 三葉',
    romaji: 'Miyamizu Mitsuha',
    image: path.join(__dirname, 'images/mitsuha.png')
  }
]

cli.command('*', 'Tell me your name;)', () => {
  const prev = config.get('prev') || 0
  config.set('prev', prev === 0 ? 1 : 0)
  const your = names[prev]

  console.log(`${your.name} ${chalk.dim(`[${your.romaji}]`)}`)
  termImg(your.image, {height: '60%', fallback() {}})
})

cli.parse()
