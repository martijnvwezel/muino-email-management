import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';

import { EmailComponent } from "./email.component";
import { EmailService } from "./email.service";
import { EmailRoutingModule } from "./email-routing.module";


@NgModule({
  declarations: [EmailComponent],
  providers:[EmailService],
  imports: [
    CommonModule,
    DataTablesModule,
    EmailRoutingModule
  ]
})
export class EmailModule { }
