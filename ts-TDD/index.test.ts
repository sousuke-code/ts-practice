import { Dollar, Franc,Money } from ".";

describe("Dollar class test", () => {
    it("should correctly multiply the amount", () => {
        const dollar = Money.dollar(5);
        expect(Money.dollar(10)).toEqual(dollar.times(2)); // 修正
        expect(Money.dollar(15)).toEqual(dollar.times(3)); // 修正
    });
});

describe("test equality", () => {
    it ("should equal amount", () => {
        const dollar = Money.dollar(5)
        expect(dollar.equals(Money.dollar(5))).toBe(true);
    });
});

describe("money test", () =>{
    it ("shoul equal amount", () => {
        const five = Money.franc(5);
        expect(Money.franc(10)).toEqual(five.times(2));
        expect(Money.franc(15)).toEqual(five.times(3));
    })
})

describe("test currenvy", () => {
    it ("should equal amount", () => {
        expect("USD").toEqual(Money.dollar(1).currency);
        expect("CGF").toEqual(Money.franc(1).currency);
    })
})