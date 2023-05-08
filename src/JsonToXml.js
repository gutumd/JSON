const fs = require('fs');
const js2xmlparser = require('js2xmlparser');

const data = fs.readFileSync('./json/data.json');
const cars = JSON.parse(data);

const xml = js2xmlparser.parse('cars', cars);

fs.writeFileSync('./xml/convertedjsondata.xml', xml);