// type addFunc = (num1: number, num2: number) => number;
// let addFunc: addFunc;
// addFunc = (n1: number, n2: number) => {
//     return n1 + n2
// }

interface addFunc {
    (num1: number, num2 : number): number;
}

type Nameable = {
    name: string;
    nickName?: string;
}



interface Human extends Nameable{
    name: string;
    age: number;
    greeting(message : string): void;
} 

class Developer implements Human {
    constructor(public name: string, public age:number, public experience: number) {};
    greeting(message: string): void {
    console.log(message);
    }
}

const tmpDev = {
    name: 'Tom',
    age: 17,
    experience: 3,
    greeting(message : string) {
        console.log(message);
    }

}
const user: Human = tmpDev;
let developer = new Developer('Tom', 10, 2);
developer.name = 'Mike';



//インターフェースはオブジェクトのみを扱う。
//インターフェースはクラスとこのなり複数のクラスの条件を適用することができる。