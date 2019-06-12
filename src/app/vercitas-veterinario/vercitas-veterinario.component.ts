import { Component, OnInit } from '@angular/core';
import { CitasService } from '../citas.service';
import { AuthService } from '../auth.service';
import { Cita } from '../models/cita';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-vercitas-veterinario',
  templateUrl: './vercitas-veterinario.component.html',
  styleUrls: ['./vercitas-veterinario.component.css']
})
export class VercitasVeterinarioComponent implements OnInit {

  todos$:Observable<Cita[]>;
  usuario$;
  susbcripcion:Subscription;
  fechafuturas:Cita[]=[];
  fechaspasadas:Cita[]=[];
  fechahoy:Cita[]=[];
  cita:Cita;

  constructor(private authService:AuthService, private citaservicio: CitasService ) {}

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
    this.todos$ = this.citaservicio.obtenertodos();
    
    console.log('hola'+this.todos$);

    this.llenartablas();

  }
  ngOnDestroy() {
   
    this.susbcripcion.unsubscribe();
  }
 


}
