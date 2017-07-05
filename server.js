// // /* @flow */

// // class Person {
// //   getPerson() {
// //   	return this;
// //   }
// // }

// // let person = new Person();
// // let { getPerson } = person;

// // console.log(getPerson() === person)
// // // true

// // var a = {
// // 	a: 2,
// // 	b: 3
// // }

// // var Promise = require('bluebird')


// var a = Promise.resolve(123)
// var b = Promise.reject(222)

// b.then(function(d){
// 	console.log(d)
// // }).catch(function(err) {
// 	// console.log(err)
// })

// // Promise.resolve()
// // .then(function() {
// // 	Promise.resolve()
// // 	.then(function() {
// // 		require('....')
// // 	})
	
// // }).then(function() {
// // 	console.log(123)
// // })


var sinon = require('sinon')
var clock = sinon.useFakeTimers()
setTimeout( function() { console.log('One second has elapsed.'); }, 1000 );
clock.tick( 500 );
console.log(123)
clock.tick( 1000 );
console.log(888)
clock.restore()
// var b = function(){
// 	console.log(123)
// }
// var a = function(){
// 	setTimeout(function(){
// 		b()
// 	}, 1000)
// }
// var spy = sinon.spy();

// clock.tick(510);

// console.log(123)
// console.log(clock)




