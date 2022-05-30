import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoanInterface } from '../interfaces/Loan.interface';

@Injectable({
  providedIn: 'root'
})
export class LoansService {

  public resultados:LoanInterface[] = [];

  constructor(private http: HttpClient) { }

  buscarLoans(query:string = ''){
    this.http.get<LoanInterface[]>('http://localhost:8080/finance/api/v1/loan')
      .subscribe( resp =>{
        this.resultados = resp;
        console.log(resp);
      });
  }

  saveLoan(loan:LoanInterface){
    this.http.post<LoanInterface>('http://localhost:8080/finance/api/v1/loan',loan)
      .subscribe(resp =>{
        console.log(resp);
        this.buscarLoans('');
      })
  }

  deleteLoan(loan:LoanInterface){
    console.log(loan.id);
    this.http.delete<LoanInterface>(`http://localhost:8080/finance/api/v1/loan/${loan.id}`)
      .subscribe(resp =>{
        console.log(resp);
        this.resultados = this.resultados.filter(l => l.id != loan.id);
      })
  }



}
