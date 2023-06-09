import { Injectable } from '@angular/core';
import { Producto } from '../domain/producto';
import { ProductoComponent } from '../pages/producto/producto.component';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private dbPath = '/producto'; 

productos: Producto[] = [];
comp: any;
productosRef: AngularFirestoreCollection<Producto>;

constructor(private db1: AngularFirestore) {
  this.productosRef = db1.collection(this.dbPath);
}

setComponetproducto(comp: ProductoComponent){
  this.comp = comp
}

updateContacto(producto: Producto){
  this.comp.producto = producto
}


save(producto: Producto){

  this.productos.push({ ...producto });
  console.log(this.productos);
  producto.idP = this.db1.createId()
  this.create(producto)
  
}

getList(){
  return this.productos;
}

create(producto: Producto): any {
  return this.productosRef.doc(producto.idP).set({ ...producto });
}
update(id: string, data: any): Promise<void> {
  return this.productosRef.doc(id).update(data);
  
}

deleteproducto(id1: string): Promise<void> {
  return this.productosRef.doc(id1).delete();
}
getAll() {
  return this.productosRef.valueChanges();
}

async actualizarProducto(id1: string, producto: Producto) {
 
    const dataToUpdate: Producto = {
      ...producto,
      nombreP: producto.nombreP,
      precio: producto.precio
      
    };
     console.log(Producto)
    this.comp.producto= dataToUpdate; // Actualizar el contacto en el componente

    await this.productosRef.doc(id1).update(dataToUpdate);

    console.log("Producto actualizado correctamente en Firestore");
   
}





}


