import { NgModule } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';


@NgModule({
  exports : [
    MenuModule,
    BrowserAnimationsModule,
    TableModule
  ]
})
export class PrimeNgModule { }
