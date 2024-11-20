export  class Money {
  readonly amount: number;
   readonly currency : string; 

  constructor(amount: number, currency: string) {
    this.amount = amount;
    this.currency = currency;
  }


  equals(object : object) : boolean{
   if (!(object instanceof Money)) return false;
   return this.amount === object.amount && this.constructor === object.constructor;
  }

  static dollar(amount  : number) : Dollar {
    return new Dollar(amount,"USD");
  }

  static franc(amount : number) : Franc {
     return new Franc(amount, "CGF");
  }

}


export class Dollar extends Money{
    constructor(amount: number, currency: string) {
        super(amount, currency);
    }

    times(multiplier: number): Money {
    return new Dollar(this.amount * multiplier, this.currency);
    }

}

export class Franc extends Money {
    constructor (amount: number, currency : string) {
        super(amount, currency);
    }


    times(multiplier : number) : Money {
       return new Franc(this.amount * multiplier, this.currency);
    }
}