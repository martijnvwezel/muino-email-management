import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { EmailService } from "./email.service";

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {




  public DomainType$: string[] = ['---'];
  public temp = 'temp'; 
  public Domain$: object;
  public domainSelect1 = '---';

  constructor(private http: HttpClient, private warning: EmailService) { }

  ngOnInit() {
    this.Domain$ = {
      'domain': 'muino.nl',
      'user':[
        {email:'m1@muino.nl', password:'', _id: 'JDII3JN20FGJ', createdAt: "2018-12-14T15:38:08.280Z" },
        {email:'m2@muino.nl', password:'', _id: 'JDII3JN20FGJ', createdAt: "2019-12-15T15:38:09.280Z" },
        {email:'m3@muino.nl', password:'', _id: 'JDII3JN20FGJ', createdAt: "2020-12-16T15:38:07.280Z" }
      ],
      'aliases':[
        {source:'m1@muino.nl', destination:'beast1@muino.nl', _id: 'JDII3JN20FGJ', createdAt: "2018-12-14T15:38:08.280Z" },
        {source:'m2@muino.nl', destination:'beast2@muino.nl', _id: 'JDII3JN20FGJ', createdAt: "2019-12-15T15:38:09.280Z" },
        {source:'m3@muino.nl', destination:'beast3@muino.nl', _id: 'JDII3JN20FGJ', createdAt: "2020-12-16T15:38:07.280Z" }
      ]
      ,
      'domains':[
        {source:'muino.nl', _id: 'JDII3JN20FGJ', createdAt: "2018-12-14T15:38:08.280Z" },
        {source:'example.com', _id: 'JDII3JN20FGJ', createdAt: "2019-12-15T15:38:09.280Z" }
      ]
    }
    this.DomainType$.push(this.Domain$['domain']);
    this.domainSelect1 = this.Domain$['domain'];

  }

  // * Users
  public save_user(user_id){
    // if(user_id in this.Domain$.user._id){
      console.log("saved user");
    // }
  }

  public remove_user(user_id){
    // if(user_id in this.Domain$.user._id){
      console.log("removed user");
    // }
  }

 // * Aliases
  public save_aliases(aliases_id){
    // if(aliases_id in this.Domain$.aliases._id){
      console.log("saved aliases");
    // }
  }

  public remove_aliases(aliases_id){
    // if(aliases_id in this.Domain$.aliases._id){
      console.log("removed aliases");
    // }
  }


 // * Domain
 public save_domain(domain_id){
  // if(domain_id in this.Domain$.domain._id){
    console.log("saved domain");
  // }
}

public remove_domain(domain_id){
  // if(domain_id in this.Domain$.domain._id){
    console.log("removed domain");
  // }
}








  public add_row(typerow){
    if(typerow ==='user'){
      this.Domain$['user'].push({
        email:'@'+this.Domain$['domain'], password:''
      });
      
      
    } else if (typerow==='aliases'){
      this.Domain$['aliases'].push({
        source: '@'+this.Domain$['domain'], destination:'@'+this.Domain$['domain'],
      });
  } else { console.log('error adding row'); }


}


  // * show a  nice readable string for the user
  public clean_date(createdAt){
    return new Date(createdAt).toDateString();
  }

}
