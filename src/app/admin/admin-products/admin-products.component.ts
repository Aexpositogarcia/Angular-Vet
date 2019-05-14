import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';
import {Route, ActivatedRoute} from '@angular/router';
import { Producto } from '../../models/producto';
import { CategoryService } from '../../category.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent  {

  productos: Producto[];
  categoriactual:string;
  categorias$;

  arrayproductofiltrados;

  constructor(private productService: ProductService, private categoriasservicio:CategoryService, 
    private route:ActivatedRoute) { 
  
 
          productService.obtenertodos().subscribe(productos=> {
            
          this.productos  = productos;

          route.queryParamMap.subscribe(parametro=>{

            this.categoriactual =parametro.get('parametrocategoria');

            if(this.categoriactual){
              this.arrayproductofiltrados=this.productos.filter(p=>p.categoria.toLowerCase()=== this.categoriactual.toLowerCase());
              console.log("Entra consulta con filtro");
            }else{
              this.categoriactual='Todos';
              console.log("Entra consulta vacia");
              this.arrayproductofiltrados=this.productos;
            }
          });

    });

  this.categorias$=this.categoriasservicio.getCategorias();

  }

  filtro(query: string){
    if(query!=null){
      this.arrayproductofiltrados=this.productos.filter(p=>p.nombre.toLowerCase().includes(query.toLowerCase()));
      console.log("Entra consulta con filtro");
    }else{
      console.log("Entra consulta vacia");
      this.arrayproductofiltrados=this.productos;
    }

  }
}
