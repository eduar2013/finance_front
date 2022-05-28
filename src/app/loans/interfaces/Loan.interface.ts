import { Payment } from "./Payment.interface";

export interface LoanInterface {
    id:                     string;
    value:                  number;
    bank:                   string;
    disbursementDate:       Date;
    installmentValue:       number;
    currentValue:           number;
    monthlyInterestRate:    number;
    annualisedInterestRate: number;
    scheduledInstallments:  number;
    lastUpdateDate:         Date;
    payments:               Payment[];
}