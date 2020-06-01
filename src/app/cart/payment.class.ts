export class Payment {
    constructor(
        public name: string,
        public number: number,
        public expiration: string,
        public cvc: number,
    ) { }
}