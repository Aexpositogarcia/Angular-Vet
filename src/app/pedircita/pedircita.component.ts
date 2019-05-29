import { Component, OnInit } from '@angular/core';
import { CitasService } from '../citas.service';
import { AnimalesService } from '../animales.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { AppUsuarios } from '../models/app-usuarios';
import { Animal } from '../models/animales';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-pedircita',
  templateUrl: './pedircita.component.html',
  styleUrls: ['./pedircita.component.css']
})

export class PedircitaComponent  {
  nombres$;
  id; 
  usuario;
  animales$:Observable<Animal[]>;
 
  constructor(private ruter: Router ,private auth:AuthService ,private citaservice:CitasService,private animaleservicio:AnimalesService) { 
    //this.nombres$=auth.appUser$.switchMap(u=>animaleservicio.obteneranimalesacutal(u.email));
    auth.appUser$.take(1).subscribe(email=>this.usuario=email);
    
    this.animales$=this.animaleservicio.obteneranimalesacutal(this.usuario);
    
    this.auth.appUser$.take(1).subscribe(appUser=>this.usuario=appUser);
  }
  

  save(cita){

    if(this.id){
      this.citaservice.actualizar(this.id,cita);
      this.ruter.navigate(['/']);
    }else{
      this.citaservice.crear(cita);
      this.ruter.navigate(['/']); 
    }
  }

  eliminar(){
    
    if(confirm("¿Quieres eliminar este producto?")){
       this.animaleservicio.eliminar(this.id);
       this.ruter.navigate(['/']);
    }

  }
}