import { Component, OnInit } from '@angular/core';

import { LoanInterface } from '../../interfaces/Loan.interface';
import { LoansService } from '../../services/loans.service';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styles: [
    `::ng-deep .p-datepicker table td {
      padding: 0.2rem !important;
    }

    ::ng-deep .p-datepicker table td > span {
      width: 1.7rem;
      height: 1.7rem;
    }

    ::ng-deep .p-datepicker table {
      font-size: 10pt;
      margin: -0.143rem 0;
    }

    ::ng-deep .p-datepicker .p-datepicker-header {
      padding: 0.2rem;
    }`
  ]
})
export class LoansComponent  implements OnInit{

  display: boolean = false;

  banks: any[] = [];

  loan : LoanInterface = {
    id: '',
    value: 0,
    bank: '',
    disbursementDate: new Date,
    installmentValue: 0,
    currentValue: 0,
    monthlyInterestRate: 0,
    annualisedInterestRate: 0,
    scheduledInstallments: 0,
    lastUpdateDate: new Date,
    payments: []
  };

  showDialog() {
      this.display = true;
  }

  hideDialog() {
    this.display = false;
}

  getResultados() : LoanInterface[]{
    return this.loanService.resultados;
  }

  constructor(private loanService :LoansService) {
    this.loanService.buscarLoans();
  }

  ngOnInit() {

    this.banks = [
        {label: 'Bancolombia', value: 'bancolombia'},
        {label: 'Davivienda', value: 'davivienda'},
        {label: 'Colpatria', value: 'colpatria'}
    ];
}

  Title:string = "Loans";

}
