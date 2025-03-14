

const lodash = require('lodash');

const names = ['karlen', 'legaspi', 'marx', 'zephaniah', 'angeline'];

const capitalizedName = lodash.map(names, lodash.capitalize);

console.log(capitalizedName);