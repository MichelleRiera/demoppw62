import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Producto } from 'src/app/domain/producto';
import { ProductoService } from 'src/app/service/producto.service';

@Component({
  selector: 'app-list-productos',
  templateUrl: './list-productos.component.html',
  styleUrls: ['./list-productos.component.scss']
})
export class ListProductosComponent {

  listadoProductos: Producto[];
  //contacto: Contacto = new Contacto();
   listadoProductosFire: any;

  constructor(private productoService: ProductoService,
      private router: Router) {
    this.listadoProductos = productoService.getList()
    console.log('listadoProductos', this.listadoProductos)
    this.listadoProductosFire = productoService.getAll()
    console.log('lista')
  }


  eliminarProducto(producto: Producto) {
    this.productoService.deleteproducto(producto.idP)
      .then(() => {
        this.listadoProductos = this.productoService.getList();
      })
      
  }
  editar(id1: string, producto: Producto) {
    console.log("editando")
    this.productoService.actualizarProducto(id1, producto)
      .then(() => {
        let params: NavigationExtras = {
          queryParams: {
            idP: producto.idP
          }
        };
        //this.router.navigate(["paginas/edit-contacto"], params);
      })
      
  }
  
  
}
