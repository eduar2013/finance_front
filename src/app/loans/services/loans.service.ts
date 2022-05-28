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

  

}
