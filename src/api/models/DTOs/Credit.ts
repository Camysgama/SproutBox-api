export class Credit {
    public readonly id: string;
    public readonly name: string;
    public readonly cpf: number;
    public readonly paymentDate: Date;
    public readonly spendCreditAmount: number;
    public readonly availableCreditAmount: number;
    public readonly totalCreditAmount: number;

    constructor(id: string, name: string, cpf: number, paymentDate: Date, spendCreditAmount: number, totalCreditAmount: number) {
        this.id = id;
        this.name = name;
        this.cpf = cpf;
        this.paymentDate = paymentDate;
        this.spendCreditAmount = spendCreditAmount;
        this.availableCreditAmount = totalCreditAmount - spendCreditAmount;
        this.totalCreditAmount = totalCreditAmount;
    }
}
