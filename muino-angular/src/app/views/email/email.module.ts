import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';

import { EmailComponent } from "./email.component";
import { EmailService } from "./email.service";
import { EmailRoutingModule } from "./email-routing.module";

import { MatAutocompleteModule, MatDividerModule, MatButtonModule,MatCheckboxModule, MatFormFieldModule, MatInputModule, MatRippleModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [EmailComponent],
  providers:[EmailService],
  imports: [
    CommonModule,
    DataTablesModule,
    EmailRoutingModule,

    FormsModule,
    MatAutocompleteModule,
    MatDividerModule,
    MatButtonModule,
    MatFormFieldModule,
    MatRippleModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule
  ]
})
export class EmailModule { }
