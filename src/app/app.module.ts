import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { MenuComponent } from './menu/menu.component';
import { CentroComponent } from './centro/centro.component';
import { PieComponent } from './pie/pie.component';
import { BotonComponent } from './boton/boton.component';
import { AcercaComponent } from './acerca/acerca.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ListContactosComponent } from './pages/list-contactos/list-contactos.component';
import { HeaderComponent } from './template/header/header.component';
import { FormsModule } from '@angular/forms';
import { EditContactoComponent } from './pages/edit-contacto/edit-contacto.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatTableModule} from '@angular/material/table';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { ProductoComponent } from './pages/producto/producto.component';
import { ListProductosComponent } from './pages/list-productos/list-productos.component';




@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    MenuComponent,
    CentroComponent,
    PieComponent,
    BotonComponent,
    AcercaComponent,
    ContactoComponent,
    ListContactosComponent,
    HeaderComponent,
    EditContactoComponent,
    ProductoComponent,
    ListProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatTableModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  providers: [{provide: FIREBASE_OPTIONS, useValue: environment.firebase},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
