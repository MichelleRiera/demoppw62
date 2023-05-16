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


  guardar() {
    if (this.contactoService.update(this.contacto.cedula, this.contacto)){
      console.log('actualizado')
      this.contacto = new Contacto()
    }else{
      this.contactoService.save(this.contacto)
      this.contacto = new Contacto()
      
    }
  
    
  }

  
}