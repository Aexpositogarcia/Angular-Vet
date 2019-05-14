import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { UserService } from './user.service';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

@Injectable()
export class AdminAuthGuardService implements CanActivate {

  constructor(private auth: AuthService, private userService: UserService) { }

  canActivate(): Observable<boolean>{
    /*operadores: 
      map:  Este operador nos permite recibir un valor de entrada y devolver un valor diferente
            al que recibimos. 

      flatMap: latMap, también llamado mergeMap, nos va a permitir operar con otros observables. Básicamente lo que va a hacer 
              es transformar un Observable en otros Observables y unificar la salida de todos los Observables bajo un solo  

      switchMap: Como explicamos anteriormente, el funcionamiento de switchMap es muy similar al de flatMap
                 pero con una diferencia muy importante. Por cada nuevo ciclo del stream principal, el stream interior se detiene.
      **/
    return this.auth.appUser$
    .map(appUsuarios=>appUsuarios.isAdmin);
      
   
  }

}
