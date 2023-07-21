import { Contacto } from 'src/app/domain/contacto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  constructor(private http: HttpClient) { }

  save(contacto: Contacto){
    return this.http.post<any>("http://localhost:8080/demo/rs/Clientes/registrar", contacto)
  }

  getAll(){
    return this.http.get<any>("http://localhost:8080/demo/rs/Clientes/listarPersonas")
  }

  public obtenerPersonas(){
    let url = "http://localhost:8080/demo/rs/Clientes/listarPersonas";
    return this.http.get<any>(url);     
  }

  delete(cedula: string) {
    const url = `http://localhost:8080/demo/rs/Clientes/eliminar`;
    const options = {
      body: { cedula }
    };
    console.log('eliminar')
    return this.http.delete<any>(url, options);
  }
  

  
  
}
