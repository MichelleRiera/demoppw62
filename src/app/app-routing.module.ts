import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaComponent } from './acerca/acerca.component';
import { ListContactosComponent } from './pages/list-contactos/list-contactos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';


const routes: Routes = [
  {path:"acerca", component: AcercaComponent},
  {path: "paginas/listacontactos", component: ListContactosComponent},
  {path: "paginas/nuevo-contacto", component: ContactoComponent},
   {path:"paginas/nuevo-contacto2", component: ContactoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
