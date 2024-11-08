"use strict";
class Person {
    constructor(initName) {
        this.name = initName;
    }
    greeting() {
        console.log(`Hello! My name is ${this.name}`);
    }
}
const tom = new Person('Tom');
tom.greeting();
console.log(tom);
