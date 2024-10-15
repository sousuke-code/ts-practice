
function sayHello() : void {
  console.log("hello!");
}

console.log(sayHello());
let tmp: undefined;


const anotherAdd : (n1 : number, n2 : number) => number :  add;

const doubleNumbre = (number : number) : number => number *2;

function doubleAndHandle(num : number, cb : (num : number) => number ) : void {
    const doubleNum = cb(num * 2);
    console.log(doubleNum);
}

doubleAndHandle(21, doubleNum => {
    return doubleNum
});
