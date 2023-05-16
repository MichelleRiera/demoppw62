import { Component } from '@angular/core';
import { Contacto } from 'src/app/domain/contacto';
import { ActivatedRoute, Router,NavigationExtras } from '@angular/router';
import { ContactoService } from 'src/app/service/contacto.service';



@Component({
  selector: 'app-edit-contacto',
  templateUrl: './edit-contacto.component.html',
  styleUrls: ['./edit-contacto.component.scss']
})
export class EditContactoComponent {
  contacto : Contacto = new Contacto();


  constructor(private route: ActivatedRoute, private router: Router, private contactoservice: ContactoService ){
    this.route.queryParams.subscribe(params => {
      const cedula = params['cedula'];
      const personaRecuperada = this.contactoservice.getContactoCedula(cedula);

      // Solo actualizamos si el objeto no es nulo ni indefinido
      if (personaRecuperada) {
        this.contacto= personaRecuperada;
      }
    });
  }
  guardar() {
    this.contactoservice.update(this.contacto.cedula, this.contacto);
    this.router.navigate(['list-paginas/listacontactos']);
  }
 

 
}