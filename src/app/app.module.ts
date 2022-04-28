import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './navbar/navbar.component';
import { DescubrenosComponent } from './descubrenos/descubrenos.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { Error404Component } from './error404/error404.component';
import { VentanasComponent } from './ventanas/ventanas.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DescubrenosComponent,
    ProyectosComponent,
    ContactoComponent,
    Error404Component,
    VentanasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
