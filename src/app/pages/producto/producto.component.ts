import { Component } from '@angular/core';
import { Producto } from 'src/app/domain/producto';
import { ProductoService } from 'src/app/service/producto.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent {
  producto: any = new Producto();

  constructor(private productoService: ProductoService,
    private router: Router) {
      console.log('hola')
      let params = this.router.getCurrentNavigation()?.extras.queryParams;
      if(params){
        console.log(params)
        this.producto = new Producto()
        this.producto = params['idP']
      }
      this.productoService.setComponetproducto(this)
    }


 
    guardar() {
      this.productoService.actualizarProducto(this.producto.idP, this.producto)
        .then(() => {
          console.log('Producto actualizado');
          this.producto = new Producto();
        })
        .catch(() => {
          this.productoService.save(this.producto);
          console.log('Producto guardado');
          this.producto = new Producto();
        });
    }
    
   
   }   