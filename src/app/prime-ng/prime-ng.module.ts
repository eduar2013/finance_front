import { NgModule } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'primeng/calendar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { ToastModule } from 'primeng/toast';



@NgModule({
  exports : [
    MenuModule,
    BrowserAnimationsModule,
    CalendarModule,
    ConfirmDialogModule,
    MessagesModule,
    MessageModule,
    TableModule,
    ToolbarModule,
    ButtonModule,
    CardModule,
    DialogModule,
    DropdownModule,
    InputNumberModule,
    ToastModule
  ]
})
export class PrimeNgModule { }
