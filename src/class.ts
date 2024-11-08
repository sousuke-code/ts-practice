class Person {
    name : string ;
    constructor(initName: string){
        this.name = initName;
    }

    greeting(){
        console.log(`Hello! My name is ${this.name}`);
    }
}

const tom = new Person('Tom');
tom.greeting();


const anotherQuill = {
   anotherGreeting: tom.greeting
}

interface Name {
    first : string;
    second : string;
}

var name: Name;
name = {
    first: 'John',
    second : 'Doe',
}

name = {
    first: 'John'
}

name = {
    first : 'John',
    second : 1337
}