let hasValue: boolean = true;
let count: number = 10;
let float: number = 3.14;
let navigate: number = -0.12;
let single: string = 'hello';
let back: string = 'hello';

const person = {
    name : {
        first : 'Jack',
        last: 'Smith',
    },
    age : 21
}

const fruits: string[] = ['Apple', 'Banana', 'Grape']

const book : [string, number, boolean] = ['business', 1500, false];


enum CoffeSize  {
    SHORT,
    TALL,
    GRANDE,
    VENTI
}
const coffee = {
    hot : true,
    size: CoffeSize.TALL
}
