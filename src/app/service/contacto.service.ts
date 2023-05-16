import { Injectable } from '@angular/core';
import { Contacto } from '../domain/contacto';
import { ContactoComponent } from '../pages/contacto/contacto.component';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  contactos: Contacto[] = [];
  comp: any;

  setComponet(comp: ContactoComponent){
    this.comp = comp
  }

  updateContacto(contacto: Contacto){
    this.comp.contacto = contacto
  }

  save(contacto: Contacto){

    this.contactos.push({ ...contacto });
    //this.contacto = new Contacto()
    console.log(this.contactos);
    
  }

  getList(){
    return this.contactos;
  }

  delete(cedula: string){
    const index =this.contactos.findIndex(Contacto => Contacto.cedula=== cedula);
    if(index !==-1){
      this.contactos.splice(index, 1);
    }
  }

  update(cedula: string, contactoActualizado: Contacto){
    const index =this.contactos.findIndex(Contacto => Contacto.cedula=== cedula);
    if(index !==-1){
      this.contactos[index]= contactoActualizado;
      return true;
    }
      return false;
  }

  getContactoCedula(cedula: string): Contacto | undefined{
    return this.contactos.find(Contacto => Contacto.cedula === cedula);
  }


  
}