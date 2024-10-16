"use strict";
function sayHello() {
    console.log("hello!");
}
console.log(sayHello());
let tmp;
const doubleNumbre = (number) => number * 2;
function doubleAndHandle(num, cb) {
    const doubleNum = cb(num * 2);
    console.log(doubleNum);
}
doubleAndHandle(21, doubleNum => {
    return doubleNum;
});
let unknownnput;
let text;
unknownnput = 'hello';
unknownnput = 21;
unknownnput = true;
if (typeof unknownnput === "string") {
    text = unknownnput;
}
function error(message) {
    throw new Error(message);
}
console.log(error('this is uan error'));
