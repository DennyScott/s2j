#!/usr/bin/env node
const fs = require('fs')
const sketch2json = require('sketch2json')
const program = require('commander');

program
  .arguments('<file>')
  .action(function(file){
    fs.readFile(file, (error, data) => {
      let fileName = file.replace('.sketch', '.json');
      sketch2json(data).then(result => fs.writeFile(fileName, JSON.stringify(result, null, 4), function(err) {
        if(err) return console.log(err);
        console.log("S2J Complete");
      }))
    })
  })
  .parse(process.argv)
