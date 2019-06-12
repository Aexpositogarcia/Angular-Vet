import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AnimalesService } from '../animales.service';
import { CitasService } from '../citas.service';
import { Cita } from '../models/cita';
import { Observable } from 'rxjs/Observable';
import { async } from 'q';
import { Subscription } from 'rxjs';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-ver-mis-citas',
  templateUrl: './ver-mis-citas.component.html',
  styleUrls: ['./ver-mis-citas.component.css']
})
export class VerMisCitasComponent implements OnInit {
  todos$:Observable<Cita[]>;
  usuario$;
  susbcripcion:Subscription;
  fechafuturas:Cita[]=[];
  fechaspasadas:Cita[]=[];
  fechahoy:Cita[]=[];
  
  constructor(private datepipe:DatePipe,private authService:AuthService, private citaservicio: CitasService ) {
    
  }

  eliminarcita(id){
    this.citaservicio.eliminar(id);
    this.llenartablas();
  }

  llenartablas(){
    this.fechafuturas=[];
    this.fechaspasadas=[];
    this.fechahoy=[];

    this.susbcripcion=this.todos$.subscribe(x=>{
      
      for(let xi of x){
        
        let hoys:string =this.citaservicio.fechactual();
        let hoy=new Date(hoys);
        let fecha=new Date(xi.fecha);

        if(hoys==xi.fecha){
          this.fechahoy.push(xi);
        }else{
          if(hoys>=xi.fecha){
            this.fechaspasadas.push(xi);
          }else{
            this.fechafuturas.push(xi);
            console.log('es menor')
          }
        }
      }
     })

  }
  
  async ngOnInit() {

    await this.authService.user$.take(1).subscribe(x=>this.usuario$=x.email);
    this.todos$ = this.authService.user$.switchMap(u => this.citaservicio.obteneremail(this.usuario$));
    
    console.log('hola'+this.todos$);

    this.llenartablas();

  }
  ngOnDestroy() {
   
    this.susbcripcion.unsubscribe();
  }
 

}
