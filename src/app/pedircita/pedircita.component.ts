import { Component } from '@angular/core';
import { CitasService } from '../citas.service';
import { AnimalesService } from '../animales.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { AppUsuarios } from '../models/app-usuarios';
import { Animal } from '../models/animales';
import { Observable } from 'rxjs';
import { FormGroup, Validators, FormControl, EmailValidator } from '@angular/forms';


@Component({
  selector: 'app-pedircita',
  templateUrl: './pedircita.component.html',
  styleUrls: ['./pedircita.component.css']
})

export class PedircitaComponent  {
  usuario;
  eform: FormGroup;
  existe:boolean;
  posterior:boolean;

  async ngOnInit(){

   await this.auth.appUser$.take(1).subscribe(usuario=>this.usuario=usuario.email);
    console.log(this.usuario);
    //al recargar la pagina no le da tiempo a obtener todos los datos
  this.animales$=this.animaleservicio.obteneranimalesacutal(this.usuario);

   this.eform= new FormGroup({
      animal: new FormControl("", Validators.required),
      descripcion: new FormControl("",Validators.required),
      fecha:new FormControl("", Validators.compose([
        Validators.required,
        Validators.apply(this.existe),
        Validators.apply(this.posterior),
       
     ])),
     email:new FormControl(),
     parte:new FormControl("", )
    });
  }

 
  nombres$;
  id; 
  
  animales$:Observable<Animal[]>;
 
  constructor(private ruter: Router ,private auth:AuthService ,private citaservice:CitasService,private animaleservicio:AnimalesService) { 
    //this.nombres$=auth.appUser$.switchMap(u=>animaleservicio.obteneranimalesacutal(u.email);
  }
  

  save(cita){

    if(this.id){
      this.citaservice.actualizar(this.id,cita);
      this.ruter.navigate(['/']);
      console.log(cita);
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

  async comprobacionfecha(fecha : string ) {  
    console.log(fecha);
    await this.citaservice.obtenerfecha(fecha)
    .subscribe(
        result => {
            if (result.length==0) {
              console.log('entra /Fecha accesible');
                this.existe = true;
            } else {
              console.log('no entra /Fecha ya pillada');
                this.existe = false;
            }
        },
        error => {
            console.log("EE:",error);
        });
      let fechaposterior=new Date();
      let fechactual=new Date(fecha);
      var isWeekend = fechactual.getDay()%6==0;
      if(fechaposterior > fechactual || isWeekend ){
        console.log('####');
        this.posterior=false;
      }else{
        this.posterior=true;
      }
  }

  

}