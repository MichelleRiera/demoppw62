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

    /*npm ---para ver si esta instalado

npm install -g @angular/cli

npm install -g npm@9.6.6

mkdir workspace
cd workspace 
ng new demoppw62       ng new eva2023Parraga
  
cd workspace
ng serve --open	


ng generate component ---para crear un componente

ng g service ---crear un servicio

template/header
ng serve --open	


****GUARDAR CAMBIOS EN GIT HUB
git add . 
git commit -m "mensaje"
git push 
 SI NO VALE BORAR ARCHIVO git/index.lock
************ANGULAR FIRE************
git pull

npm i -g @angular/fire

npm i firebase

npm i -g @angular/fire@latest

npm uninstall @angular/cli
npm install @angular/cli@15
ng version
ng update @angular/core@15 @angular/cli@15
git commit -m "test"
npm uninstall @angular/core@15 @angular/cli@15
ng add @angular/core@15 @angular/cli@15
ng add @angular/fire@latest

*****git hub****subir
git clone con link https de github

*********************subir repositorio**********
--- el terminal git bash here

git status
git add .
git commit -m "mensaje"
git config --global user.email mishitariera@gmail.com
git config --global user.name MichelleRiera
git branch -M main 
git remote add origin --- esto da el github
git push -u origin main */
}
