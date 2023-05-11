import { Injectable } from '@angular/core';
import { Contacto } from '../domain/contacto';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  contactos: Contacto[] = [];

  constructor() { }

  save(contacto: Contacto){
    this.contactos.push(contacto);
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

  update(cedula: string, contactoService: Contacto){
    const index =this.contactos.findIndex(Contacto => Contacto.cedula=== cedula);
    if(index !==-1){
      this.contactos[index]= contactoService;
    }
  }

  
}