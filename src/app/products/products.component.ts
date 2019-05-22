import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ProductService } from '../product.service';
import { CategoryService } from '../category.service';

import { ActivatedRoute } from '@angular/router';
import { Producto } from '../models/producto';
import {Carrito} from '../models/Carrito';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';
import { ShoppingCartService } from '../shopping-cart.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit,OnDestroy {
  arrayproductofiltrados: Producto[]=[];
  productos: Producto[]=[];
  producto: Producto;
  cart:any;
  shoppingCart;

  subcribtion: Subscription;

  productos$;
  categorias$;
  categoriactual: string;

  @Input('productocard') productoencard:Producto;

  constructor(route: ActivatedRoute, productService: ProductService, categorieService: CategoryService
    ,  private shoppingcartservice:ShoppingCartService) { 

    productService.obtenertodos().subscribe(productos=> {

      this.productos  = productos;

      route.queryParamMap.subscribe(parametro=>{
        this.categoriactual =parametro.get('parametrocategoria');

        if(this.categoriactual){
          this.arrayproductofiltrados=this.productos.filter(p=>p.categoria=== this.categoriactual);

          console.log("Entra consulta con filtro");
        }else{
          
          this.arrayproductofiltrados=this.productos;
        }
      });

    });
    this.categorias$=categorieService.getCategorias();

    
  }
  filtro(valor:string){

    if(valor!=null){
      this.arrayproductofiltrados=this.productos.filter(p=>p.nombre.toLowerCase().includes(valor.toLowerCase()));
      console.log("Entra consulta con filtro");
    }else{
      console.log("Entra consulta vacia");
      this.arrayproductofiltrados=this.productos;
    }

  }



  async ngOnInit() {
    this.subcribtion=(await this.shoppingcartservice.ObtenerCarrito()).subscribe(cart=>this.cart=cart);
  }
  ngOnDestroy(){
    this.subcribtion.unsubscribe();
  }

}
