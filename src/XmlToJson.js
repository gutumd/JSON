const fs = require('fs');
const xml2js = require('xml2js');

const xml = fs.readFileSync('./xml/data.xml', 'utf-8');

xml2js.parseString(xml, (err, result) => {
  if (err) throw err;
  
  const json = JSON.stringify(result, null, 2);

  fs.writeFileSync('./json/convertedxmldata.json', json);
});