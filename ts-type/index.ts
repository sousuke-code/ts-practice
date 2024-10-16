
function sayHello() : void {
  console.log("hello!");
}

console.log(sayHello());
let tmp: undefined;



const doubleNumbre = (number : number) : number => number *2;

function doubleAndHandle(num : number, cb : (num : number) => number ) : void {
    const doubleNum = cb(num * 2);
    console.log(doubleNum);
}

doubleAndHandle(21, doubleNum => {
    return doubleNum
});

let unknownnput : unknown;
let text : string;
unknownnput = 'hello';
unknownnput = 21;
unknownnput = true;

if (typeof unknownnput === "string") {
    text = unknownnput ;
}



function error(message : string) : never {
    throw new Error(message);
}


console.log(error('this is uan error'));
