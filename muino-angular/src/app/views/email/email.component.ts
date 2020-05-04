import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { EmailService } from "./email.service";

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {

  constructor(private http: HttpClient, private warning: EmailService) { }

  ngOnInit() {
  }

}
