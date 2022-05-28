
export interface Payment {
    installmentNumber: number;
    value:             number;
    valueAfterPayment: number;
    paymentDate:       Date;
}