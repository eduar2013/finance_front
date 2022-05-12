import { NgModule } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {PanelModule} from 'primeng/panel';


@NgModule({
  exports : [
    MenuModule,
    BrowserAnimationsModule,
    PanelModule
  ]
})
export class PrimeNgModule { }
