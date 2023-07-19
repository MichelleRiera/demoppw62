import { Injectable } from '@angular/core';
import { Contacto } from '../domain/contacto';
import { ContactoComponent } from '../pages/contacto/contacto.component';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  private dbPath = '/contactos'; 

  contactos: Contacto[] = [];
  comp: any;
  contactosRef: AngularFirestoreCollection<Contacto>;

  constructor(private db: AngularFirestore) {
    this.contactosRef = db.collection(this.dbPath);
  }


  update4(id: string, data: any): Promise<void> {
    return this.contactosRef.doc(id).update(data);
  }
  setComponet(comp: ContactoComponent){
    this.comp = comp
  }

  updateContacto(contacto: Contacto){
    this.comp.contacto = contacto
  }
 
  
  save(contacto: Contacto){

    this.contactos.push({ ...contacto });
    console.log(this.contactos);
    contacto.persona_id = this.db.createId()
    this.create(contacto)
    
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

  /*update1(cedula: string, contactoActualizado: Contacto){
    const index =this.contactos.findIndex(Contacto => Contacto.cedula=== cedula);
    if(index !==-1){
      this.contactos[index]= contactoActualizado;
      return true;
    }
      return false;
  }*/

  update2(persona_id: string, contactoActualizado: Contacto){
    const index =this.contactos.findIndex(Contacto => Contacto.persona_id=== persona_id);
    if(index !==-1){
      this.contactos[index]= contactoActualizado;
      return true;
    }
      return false;
  }
  
  

  getContactoCedula(cedula: string): Contacto | undefined{
    return this.contactos.find(Contacto => Contacto.cedula === cedula);
  }

  create(contacto: Contacto): any {
    return this.contactosRef.doc(contacto.persona_id).set({ ...contacto });
  }
  update(id: string, data: any): Promise<void> {
    return this.contactosRef.doc(id).update(data);
    
  }

  delete1(id: string): Promise<void> {
    return this.contactosRef.doc(id).delete();
  }
  getAll() {
    return this.contactosRef.valueChanges();
  }
  async actualizarContacto(id: string, contacto: Contacto) {
   
      const dataToUpdate: Contacto = {
        ...contacto,
        nombre: contacto.nombre,
        cedula: contacto.cedula,
        direccion: contacto.direccion
      };
      console.log(Contacto)
      this.comp.contacto = dataToUpdate; // Actualizar el contacto en el componente
  
      await this.contactosRef.doc(id).update(dataToUpdate);
  
      console.log("Contacto actualizado correctamente en Firestore");
     
  }
  

 
  
  
}



  
