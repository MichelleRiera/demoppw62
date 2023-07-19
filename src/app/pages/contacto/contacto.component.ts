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
      this.contactoService.setComponet(this)
    }


  
   /* guardar() {
      this.contactoService.actualizarContacto(this.contacto.uid, this.contacto,)
      
        .then(() => {
          console.log('Contacto actualizado');
          this.contacto = new Contacto();
        })
        .catch(() => {
          this.contactoService.save(this.contacto);
          console.log('Contacto guardado');
          this.contacto = new Contacto();
        });

        
    }*/
    guardar() {
    console.log(this.contacto)
    // antes firebase --> this.contactoService.save(this.contacto)
    this.personasService.save(this.contacto).subscribe(data => {
      console.log("resultado WS save", data);
    });
    this.contacto = new Contacto()
  }
  
    
   actualizar() {
      if (this.contactoService.update2(this.contacto.persona_id, this.contacto)){
        console.log('actualizado')
        this.contacto = new Contacto()
      }else{
        this.contactoService.save(this.contacto)
        this.contacto = new Contacto()
        
      }
   }
   }   