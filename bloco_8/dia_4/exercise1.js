
const assert = require('assert');
const { access } = require('fs');

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];

function flatten() {
  return arrays.reduce((previousValue, currentValue) =>
  previousValue.concat(currentValue),[])
}

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);