import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class EmailService {

    constructor(private http: HttpClient) { }//, private token: TokenStorage

    getEmailData(): Observable<any> {
        return Observable.create(observer => {
            this.http.get('/api/email/getemail', {
            }).subscribe((data: any) => {
                observer.next(data);
                observer.complete();
            })
        });
    }


}