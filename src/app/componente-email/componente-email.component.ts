import { Component } from '@angular/core';
import { Http, Headers, Response, URLSearchParams, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-componente-email',
  templateUrl: './componente-email.component.html',
  styleUrls: ['./componente-email.component.css']
})
export class ComponenteEmailComponent  {

  constructor(private http: Http) { }


  sendEmail(email:string, contenido:string ) {

    let url = `https://us-central1-pshop-855e1.cloudfunctions.net/httpEmail`
    let params: URLSearchParams = new URLSearchParams();
    let headers = new Headers({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
    let options = new RequestOptions({headers: headers});

    params.set('to', email);
    params.set('from', 'you@pshop.com');
    params.set('subject', 'test-email');
    params.set('content', contenido);

    return this.http.post(url, params, options)
                    .toPromise()
                    .then( res => {
                      console.log(res)
                    })
                    .catch(err => {
                      console.log(err)
                    })

  }



}
