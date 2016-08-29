module.exports = 'it work from module.js'

var example = require('./moduleA.js')

console.log(example.x)
console.log(example.addX(3))

var a = require('./module-jquery.js')

a.on('ready',function(){
	alert('3s后监听')
	console.log('module a is ready')
})