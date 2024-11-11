type Engineer = {
    name: string;
    role: string;
}

type Blogger = {
    name: string;
    follower: number ;
}

interface EngineerBlogger extends Engineer , Blogger { }
const quill: EngineerBlogger = {
    name: 'Tom',
    role: 'front',
    follower : 1000,
}

type NumberBoolean = number | boolean;
type StringNumber = string | number;
type Mix = NumberBoolean & StringNumber;

function toUpperCase(x:string) : string;
function toUpperCase(x:number) : number;
function toUpperCase(x : string | number) {
   if (typeof x === 'string') {
    return x.toUpperCase();
   }
   return x;
 }

const upperHello = toUpperCase('hello');

type NomadWorker = Engineer | Blogger ;

function describeProfile(noamadWorker : NomadWorker) {
    console.log(noamadWorker.name);
    if ('role' in noamadWorker) {
        console.log(noamadWorker.role);
    }
}

class Dog {
    kind: 'dog'  ='dog';
    speak () {
        console.log('bow-woe');
    }
}

class Bird {
    kind: 'bird' = 'bird';
   speak() {
    console.log('tweet-tweet');
   }

   fly (){
    console.log('flutter');
   }
}

type Pet = Dog | Bird;
function havePet(pet : Pet) {
    pet.speak();
    if (pet instanceof Bird) {
        pet.fly();
    }
}
havePet(new Bird());

const input = <HTMLInputElement>document.getElementById('input');
input.value = 'initial input value';


interface Designer {
    name: string;
    [index: string] : string;
}

const designer: Designer  = {
    name: 'Tom',
    role: 'web'
}


interface DownloadedData {
   id: number;
   user?: {
    name?: {
        first: string;
        last: string;
    }
   },
   0: number
}

type id = DownloadedData["id"];
enum Color {
    RED,
    BLUE
}
class AdvancedPerson {
    name: string = 'Tom'
}
