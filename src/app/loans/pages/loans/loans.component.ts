import { Component, OnInit } from '@angular/core';

import { Car } from '../../interfaces/car';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styles: [
  ]
})
export class LoansComponent implements OnInit { 

  constructor() { }

  Title:string = "Loans";

  cars: Car[] = [
    {
      "vin":"1",
      "brand":"brand",
      "color":"red",
      "year":"2025"
    }

  ];

  ngOnInit(): void {
  }

}
