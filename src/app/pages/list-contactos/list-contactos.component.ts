import { PersonasService } from './../../service/personas.service';
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
   listadoContactosWS: any;

  /*constructor(private contactoService: ContactoService,
      private router: Router, private personasService: PersonasService) {
    this.listadoContactos = contactoService.getList()
    console.log('listadoContactos', this.listadoContactos)
    this.listadoContactosFire = contactoService.getAll()
    this.listadoContactosWS= contactoService.getAll()
    console.log('lista')
  } */

  constructor(private contactoService: ContactoService,
    private router: Router, private personasService: PersonasService) {
  this.listadoContactos = contactoService.getList()
  console.log('listadoContactos', this.listadoContactos)
  this.listadoContactosFire = contactoService.getAll()
  this.listadoContactosWS= contactoService.getAll()
  console.log('lista')
} 
  
  ngOnInit(): void {
    this.personasService.obtenerPersonas().subscribe(
      (response) => {
        this.listadoContactosWS = response;
        console.log('Listado de contactos:', this.listadoContactosWS);
      },
      (error) => {
        console.error('Error al obtener la lista de contactos:', error);
      }
    );
  }
  
  

  /*editar1(contacto: Contacto){
    this.contactoService.updateContacto(contacto)
    let params: NavigationExtras = {
      queryParams: {
        cedula: contacto.cedula

      }
    }
    //this.router.navigate(["paginas/edit-contacto"], params)
   
 

  }*/
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
    this.contactoService.delete1(contacto.persona_id)
      .then(() => {
        this.listadoContactos = this.contactoService.getList();
      })
      
  }
  editar(id: string, contacto: Contacto) {
    this.contactoService.actualizarContacto(id, contacto)
      .then(() => {
        let params: NavigationExtras = {
          queryParams: {
            uid: contacto.persona_id
          }
        };
        //this.router.navigate(["paginas/edit-contacto"], params);
      })
      
  }
  
  
  
  
  


}

  
    
  

  
  

