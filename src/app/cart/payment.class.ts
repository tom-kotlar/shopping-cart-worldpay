export class Payment {
    constructor(
        public name: string,
        public cardNumber: number,
        public expirationMonth: string,
        public expirationYear: string,
        public cvc: number,
    ) { }
}