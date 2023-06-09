import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaComponent } from './acerca/acerca.component';
import { ListContactosComponent } from './pages/list-contactos/list-contactos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { EditContactoComponent } from './pages/edit-contacto/edit-contacto.component';
import { ListProductosComponent } from './pages/list-productos/list-productos.component';


const routes: Routes = [
  {path:"acerca", component: AcercaComponent},
  {path: "paginas/listacontactos", component: ListContactosComponent},
  {path: "paginas/listaproductos", component: ListProductosComponent},
  {path: "paginas/nuevo-contacto", component: ContactoComponent},
  {path: "paginas/edit-contacto" , component: EditContactoComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }