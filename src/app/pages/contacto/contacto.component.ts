import { PersonasService } from './../../service/personas.service';
import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contacto } from 'src/app/domain/contacto';
import { ContactoService } from 'src/app/service/contacto.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent {

  contacto: any = new Contacto();
  listadoContactosWS: any[] = []; // Asegúrate de tener esta variable definida como un array

  constructor(private contactoService: ContactoService,
    private personasService: PersonasService,
    private router: Router) {
      console.log('hola')
      let params = this.router.getCurrentNavigation()?.extras.queryParams;
      if(params){
        console.log(params)
        this.contacto = new Contacto()
        this.contacto = params['cedula']
      }
      this.contactoService.setComponet(this);
      this.actualizarListadoContactos();
    }

    actualizarListadoContactos() {
      this.personasService.obtenerPersonas().subscribe(
        (response) => {
          this.listadoContactosWS = response; // Asignar la respuesta del web service a la propiedad listadoContactosWS
          console.log('Listado de contactos:', this.listadoContactosWS);
        },
        (error) => {
          console.error('Error al obtener la lista de contactos:', error);
        }
      );
    }

    guardar() {
      console.log(this.contacto);
      this.personasService.save(this.contacto).subscribe(data => {
        this.loadContactList(); 
        console.log("resultado WS save", data);
        // Agregar el nuevo contacto a la lista local (listadoContactosWS)
        this.listadoContactosWS.push(data); // Suponiendo que el servicio devuelve el contacto guardado (data)
        this.contacto = new Contacto();
      });
    }

    loadContactList() {
      this.personasService.obtenerPersonas().subscribe(
        (response) => {
          this.listadoContactosWS = response;
          this.loadContactList(); 
  
          console.log('Listado de contactos:', this.listadoContactosWS);
        },
        (error) => {
          console.error('Error al obtener la lista de contactos:', error);
        }
      );
    }
    
}
