var x = 5;
var addX = function(value){
	return value + x;
}

module.exports.x = x;
module.exports.addX = addX;

//调用moduleB
var moduleB = require('./moduleB.js');
console.log(moduleB.circumference(5))