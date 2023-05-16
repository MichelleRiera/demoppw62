import { Component , EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contacto } from './domain/contacto';
import { ContactoService } from './service/contacto.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  @Input() name = "Michelle"

  constructor(private contactoService: ContactoService) { 
  }

  ngOnInit() {
  }
}
