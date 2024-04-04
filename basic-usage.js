// number
console.log(typeof 42 === 'number');

console.log(typeof Math.LN2 === 'number');

console.log(typeof Infinity === 'number');

console.log(typeof Number('0') === 'number');

// bigint
console.log(typeof 42n === 'bigint');

// string
console.log(typeof '' === 'string');

console.log(typeof 'banana' === 'string');

// symbol
console.log(typeof Symbol() === 'symbol');

// undefined
console.log(typeof undefined === 'undefined');

// object
console.log(typeof {} === 'object');

// function
console.log(typeof (() => true) === 'function');
