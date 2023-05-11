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
        cedula: contacto.cedula
       
        
      }
    }
    this.router.navigate(["paginas/edit-contacto"], params)
  }

  eliminar(contacto: Contacto) {
    this.contactoService.delete(contacto.cedula);
    this.listadoContactos= this.contactoService.getList();
    
  }
  actualizar(contacto: Contacto) {
    const contactoIndex = this.listadoContactos.findIndex(c => c.cedula === contacto.cedula);

    if (contactoIndex !== -1) {
      const contactoOriginal = this.listadoContactos[contactoIndex];
      // Verificar si los datos han cambiado
      if (contacto.nombre !== contactoOriginal.nombre || contacto.direccion !== contactoOriginal.direccion) {
        this.listadoContactos[contactoIndex] = contacto;
        console.log('Contacto actualizado:', contacto);
      } else {
        console.log('No se han realizado cambios en el contacto:', contacto);
      }
    } else {
      // Si no existe el contacto, agregarlo
      this.listadoContactos.push(contacto);
      console.log('Nuevo contacto agregado:', contacto);
    }
}
}

  
    
  

  
  

