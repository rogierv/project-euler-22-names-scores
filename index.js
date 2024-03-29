const fs = require('fs');

let names;

fs.readFile('./p022_names.txt', (error, data) => {
  try {
    names = data
      .toString()
      .replace(/["]+/g, '')
      .split(',');
    console.log(processFile());
  } catch {
    throw error;
  }
});

const processFile = () => {
  const valuedNames = names.sort().map((name, index) => (index + 1) * alphabeticalValue(name));
  return valuedNames.reduce((prev, current) => prev + current);
};

const alphabeticalValue = name => {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return name
    .split('')
    .map(char => alphabet.indexOf(char) + 1)
    .reduce((prev, current) => prev + current);
};
