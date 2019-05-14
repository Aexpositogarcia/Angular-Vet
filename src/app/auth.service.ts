import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AppUsuarios } from './models/app-usuarios';
import { UserService } from './user.service';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class AuthService {
  user$: Observable<firebase.User>;
  constructor(private userService: UserService, 
    private afAuth: AngularFireAuth, 
    private route: ActivatedRoute) { 

    this.user$=afAuth.authState;
  }
  
  login(){
    let returnUrl=this.route.snapshot.queryParamMap.get('returnUrl') ||'/';
    localStorage.setItem('returnUrl',returnUrl);
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    } 
  loginf(){
    let returnUrl=this.route.snapshot.queryParamMap.get('returnUrl') ||'/';
    localStorage.setItem('returnUrl',returnUrl);
    this.afAuth.auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider());
    } 
  logint(){
    let returnUrl=this.route.snapshot.queryParamMap.get('returnUrl') ||'/';
    localStorage.setItem('returnUrl',returnUrl);
    this.afAuth.auth.signInWithRedirect(new firebase.auth.TwitterAuthProvider());
  }
  logout(){
    this.afAuth.auth.signOut();
  }

  get appUser$(): Observable<AppUsuarios>{

    return this.user$.switchMap(user=> {
      if(user) {
        //Si existe el usuario entra
        
        return this.userService.obtenerUsuario(user.uid);
        
      }else{
        //Para que no de fallo al salir devolvemos un observable null
        return Observable.of(null);
      }  
      
    });
    
  }
}
