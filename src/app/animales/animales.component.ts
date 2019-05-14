import { Component, OnInit } from '@angular/core';
import { Animal } from '../models/animales';
import { AnimalesService } from '../animales.service';
import { AuthService } from '../auth.service';
import { AppUsuarios } from '../models/app-usuarios';

@Component({
  selector: 'app-animales',
  templateUrl: './animales.component.html',
  styleUrls: ['./animales.component.css']
})
export class AnimalesComponent implements OnInit {
  animales$
  usuario:AppUsuarios;
  constructor(private auth: AuthService,private animaleservice:AnimalesService) { 
    this.animales$=auth.appUser$.switchMap(u=>animaleservice.obteneranimalesacutal(u.email))
    

  }

  ngOnInit() {
     
  }

}
