import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoansComponent } from './pages/loans/loans.component';
import { PaymentsComponent } from './pages/payments/payments.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';



@NgModule({
  declarations: [
    LoansComponent,
    PaymentsComponent
  ],
  exports:[
    LoansComponent,
    PaymentsComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ]
})
export class LoansModule { }
