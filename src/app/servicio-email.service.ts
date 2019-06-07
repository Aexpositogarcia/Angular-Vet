import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { Http, Headers, Response, URLSearchParams, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ServicioEmailService {

  constructor(private http: Http) { }
  endpoint = 'https://us-central1-pshop-855e1.cloudfunctions.net/firestoreEmail';
  sendEmail() {

      
    
      const data = {
        toEmail: 'alberexgar@hotmail.com',
        toName: 'Jeff Delaney'
      }
  
      this.http.post(this.endpoint, data).subscribe();

  }
}
