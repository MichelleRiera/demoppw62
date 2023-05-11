import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Contacto } from 'src/app/domain/contacto';
import { ContactoService } from 'src/app/service/contacto.service';

@Component({
  selector: 'app-list-contactos',
  templateUrl: './list-contactos.component.html',
  styleUrls: ['./list-contactos.component.scss']
})
export class ListContactosComponent {

  listadoContactos: Contacto[] = []

  constructor(private contactoService: ContactoService,
      private router: Router) {
    this.listadoContactos = contactoService.getList()
    console.log('listadoContactos', this.listadoContactos)
  }

  editar(contacto: Contacto){
    console.log(contacto)
    let params: NavigationExtras = {
      queryParams: {
        contacto: contacto,
        nombre: 'Cristian'
      }
    }
    this.router.navigate(['paginas/nuevo-contacto'], params)
  }

  eliminar(contacto: Contacto) {
    this.contactoService.delete(contacto.cedula);
    this.listadoContactos= this.contactoService.getList();
    
  }
}

  
    
  

  
  

