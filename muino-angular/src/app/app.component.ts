import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { MatIconRegistry } from "@angular/material";
import { DomSanitizer } from "@angular/platform-browser";

import { AuthService } from './auth/auth.service';
import { SidebarComponent } from './containers/sidebar/sidebar.component';
// import {   } from "./_nav";
import { exist_role } from "./shared/main_functions";







@Component({
  selector: 'body',
  template: '<router-outlet></router-outlet>'
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private userSubscription: Subscription;
  public user: any;

  constructor(
    private authService: AuthService,
    private router: Router,
    private sidebar: SidebarComponent) {}

  //

  public ngOnInit() {
    // init this.user on startup
    this.authService.me().subscribe(data => {
      this.user = data.user;
    });

    // update this.user after login/register/logout
    this.userSubscription = this.authService.$userSource.subscribe((user) => {
      this.user = user;
      this.update_users();
      
    });


  }// end ngOnInit

  navigate(link): void {
    this.router.navigate([link]);
  }
    
  ngOnDestroy() {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }

  
  private update_users() {
    // console.log("update sidebar");


    
  }



}