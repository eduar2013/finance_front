import { Component, OnInit } from '@angular/core';
import {MenuModule} from 'primeng/menu';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {

  constructor() { }

  items: MenuItem[] = [];

  ngOnInit(): void {
    this.items = [
      {label: 'Loans', icon: 'pi pi-fw pi-wallet', routerLink:"/"},
      {label: 'Open', icon: 'pi pi-fw pi-download', routerLink:"payments"},
      {label: 'Undo', icon: 'pi pi-fw pi-refresh'}
  ];
  }

}
