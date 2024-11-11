abstract class Person {
  static species = 'Homo';
  static isAdult(age : number ) {
    if (age > 17) return true;
    return false;
  }
  constructor(public name: string, protected age: number) {}
  incrementAge() {
    this.age += 1;
  }
  greeting(this: Person) {
    console.log(`Hello! My name is ${this.name}. I am ${this.age} years old`);
    this.explainjob();
  }
  abstract explainjob(): void;

}

class Teacher extends Person {
    private static instance: Teacher;

    explainjob(){
         console.log(`I am a teacher  and I teach ${this.subject}`);
    }
  get subject() {
    if (!this._subject) {
      throw new Error("This is no subject");
    }
    return this._subject;
  }
  set subject(value) {}
  private constructor(name: string, age: number, public _subject: string) {
    super(name, age);
  }

  greeting() {
    console.log(`Hello! My name is ${this.name}. I am ${this.age} years old`);
  }

  static getInstance() {
    Teacher.instance = new Teacher('Tom', 18, 'Math');
    return Teacher.instance;
  }
}