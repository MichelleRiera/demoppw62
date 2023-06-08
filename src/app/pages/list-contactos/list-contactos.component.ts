import { Component, Input } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Contacto } from 'src/app/domain/contacto';
import { ContactoService } from 'src/app/service/contacto.service';

@Component({
  selector: 'app-list-contactos',
  templateUrl: './list-contactos.component.html',
  styleUrls: ['./list-contactos.component.scss']
})
export class ListContactosComponent {

  listadoContactos: Contacto[];
  //contacto: Contacto = new Contacto();
   listadoContactosFire: any;

  constructor(private contactoService: ContactoService,
      private router: Router) {
    this.listadoContactos = contactoService.getList()
    console.log('listadoContactos', this.listadoContactos)
    this.listadoContactosFire = contactoService.getAll()
    console.log('lista')
  }

  editar1(contacto: Contacto){
    this.contactoService.updateContacto(contacto)
    let params: NavigationExtras = {
      queryParams: {
        cedula: contacto.cedula

      }
    }
    //this.router.navigate(["paginas/edit-contacto"], params)
   
 

  }
  /*editar(contacto: Contacto){
    this.contactoService.update(contacto.uid, contacto)
    let params: NavigationExtras = {
      queryParams: {
        uid: contacto.uid

      }
    }
    //this.router.navigate(["paginas/edit-contacto"], params)
   
 

  }*/

  /*eliminar(contacto: Contacto) {
    this.contactoService.delete(contacto.cedula);
    this.listadoContactos= this.contactoService.getList();
    
  }*/

  eliminar(contacto: Contacto) {
    this.contactoService.delete1(contacto.uid)
      .then(() => {
        this.listadoContactos = this.contactoService.getList();
      })
      .catch((error) => {
        console.error("Error al eliminar el contacto:", error);
      });
  }
  editar(contacto: Contacto) {
    this.contactoService.actualizarContacto(contacto)
      .then(() => {
        let params: NavigationExtras = {
          queryParams: {
            uid: contacto.uid
          }
        };
        //this.router.navigate(["paginas/edit-contacto"], params);
      })
      .catch((error) => {
        console.error("Error al actualizar el contacto:", error);
      });
  }
  
  
  


}

  
    
  

  
  

