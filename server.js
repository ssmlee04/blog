/* @flow */

class Person {
  getPerson() {
  	return this;
  }
}

let person = new Person();
let { getPerson } = person;

console.log(getPerson() === person)
// true
