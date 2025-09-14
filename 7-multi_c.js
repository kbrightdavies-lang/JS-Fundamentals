#!/usr/bin/node

const x = parseInt(process.argv[2]); // take the 1st argument and convert to number

if (isNaN(x)) {
  console.log('Missing number of occurrences');
} else {
  for (let i = 0; i < x; i++) {
    console.log('C is fun');
  }
}