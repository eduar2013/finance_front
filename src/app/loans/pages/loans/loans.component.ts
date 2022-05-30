import { Component, OnInit } from '@angular/core';
import { ConfirmationService, ConfirmEventType, Message, MessageService} from 'primeng/api';
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
  position?: string;

  banks: any[] = [];

  val:string='';

  loan : LoanInterface = {
   bank :'davivienda',
   installmentValue:1145000,
   disbursementDate:new Date,
   annualisedInterestRate:12,
   scheduledInstallments:72,
   value:70000000,
   monthlyInterestRate:0.81
  };


  showDialog() {
      this.display = true;
  }

  hideDialog() {
    this.display = false;
  }

  saveLoan(){
    console.log(this.loan);
    this.loanService.saveLoan(this.loan);
    this.hideDialog();
  }


  deleteLoan(loanDelete:LoanInterface){
    this.messageService.clear();
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
          this.loanService.deleteLoan(loanDelete);
          this.messageService.add({severity:'info', summary:'Confirmed', detail:'Record deleted', life:3000});
      },
      reject: (type: any) => {
          switch(type) {
              case ConfirmEventType.REJECT:
                  this.messageService.add({severity:'error', summary:'Rejected', detail:'You have rejected'});
              break;
              case ConfirmEventType.CANCEL:
                  this.messageService.add({severity:'warn', summary:'Cancelled', detail:'You have cancelled'});
              break;
          }
      }
  });
  }

  getResultados() : LoanInterface[]{
    return this.loanService.resultados;
  }

  constructor(private loanService :LoansService, private confirmationService: ConfirmationService, private messageService: MessageService) {
    this.loanService.buscarLoans();
  }

  ngOnInit() {

    this.banks = [
        {label: 'Bancolombia', value: 'Bancolombia'},
        {label: 'Davivienda', value: 'Davivienda'},
        {label: 'Colpatria', value: 'Colpatria'}
    ];
}

  Title:string = "Loans";

}
