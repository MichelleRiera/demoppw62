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

  constructor(private contactoService: ContactoService,
      private router: Router) {
    this.listadoContactos = contactoService.getList()
    console.log('listadoContactos', this.listadoContactos)
    //this.contacto = contactoService.contacto
    console.log('lista')
  }

  editar(contacto: Contacto){
    //this.contacto = contacto
    this.contactoService.updateContacto(contacto)
    let params: NavigationExtras = {
      queryParams: {
        cedula: contacto.cedula

      }
    }
    //this.router.navigate(["paginas/edit-contacto"], params)
   
 

  }

  eliminar(contacto: Contacto) {
    this.contactoService.delete(contacto.cedula);
    this.listadoContactos= this.contactoService.getList();
    
  }
  guardar1() {
    //this.contactoService.update(this.contacto.cedula, this.contacto);
    this.router.navigate(['list-paginas/listacontactos']);
  }
  

}

  
    
  

  
  

