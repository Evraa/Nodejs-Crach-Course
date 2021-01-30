const xyz = require('./people'); 
//or 
// const {people, age_values} = require('./people'); 

console.log(xyz);
console.log(xyz.age_values);
console.log(xyz.people);

//importing os
const os = require('os');
console.log(os.platform(), os.homedir());