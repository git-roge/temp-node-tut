//CommonJS, every file is module (by Default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternate-favorite')
require('./7-mind-grenade')

console.log(data);
sayHi('susan');
sayHi(names.john);
sayHi(names.peter);