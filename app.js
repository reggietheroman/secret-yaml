const fs = require('fs');
const YAML = require('yaml');

function read(path) {
  fs.readFile(path, 'utf8', function(err, contents) {
    console.log('Parse: ', YAML.parse(contents));
    console.log('Stringify: ', YAML.stringify(contents));
  });
}

read('test.yml');

