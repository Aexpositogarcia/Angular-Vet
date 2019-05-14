import { Component, OnInit } from '@angular/core';
import { AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase';
import {Observable} from 'rxjs/Observable';
import { AuthService } from '../auth.service';
import { AppUsuarios } from '../models/app-usuarios';
import { ShoppingCartService } from '../shopping-cart.service';
import { Carrito } from '../models/Carrito';
@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent  implements OnInit{
  
  //Utilizado
  usuario: AppUsuarios;
  carrito$: Observable<Carrito>;

  constructor(private auth: AuthService, private servicioCarrito:ShoppingCartService) {  }
  
  logout(){

    this.auth.logout();
  
  }
  async ngOnInit(){
     //afAuth.authState.subscribe(user=>this.user=user);
     this.auth.appUser$.subscribe(appUser=>this.usuario=appUser);
      
     this.carrito$=await this.servicioCarrito.ObtenerCarrito();
     
  }

}
