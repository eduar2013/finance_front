import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoansComponent } from './loans/pages/loans/loans.component';
import { PaymentsComponent } from './loans/pages/payments/payments.component';

const routes: Routes = [
  {
    path: '',
    component: LoansComponent,
    pathMatch: 'full'
  },
  {
    path: 'payments',
    component: PaymentsComponent
  },
  {
    path:'**',
    redirectTo:''
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
