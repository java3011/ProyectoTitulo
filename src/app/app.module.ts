import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Componentes/header/header.component';
import { PiePaginaComponent } from './Componentes/pie-pagina/pie-pagina.component';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { NoticiasComponent } from './Componentes/noticias/noticias.component';
import { InformacionComponent } from './Componentes/informacion/informacion.component';
import { ProfesionalesComponent } from './Componentes/profesionales/profesionales.component';
import { IniciosesionComponent } from './Usuario/iniciosesion/iniciosesion.component';

import { HttpClientModule } from '@angular/common/http';
import { PaginaexamenesComponent } from './Usuario/paginaexamenes/paginaexamenes.component';
import { RegistroComponent } from './Usuario/registro/registro.component';
import { ConsultaComponent } from './Usuario/consulta/consulta.component';
import { ExamenesComponent } from './Usuario/examenes/examenes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PiePaginaComponent,
    InicioComponent,
    NoticiasComponent,
    InformacionComponent,
    ProfesionalesComponent,
    IniciosesionComponent,
    PaginaexamenesComponent,
    RegistroComponent,
    ConsultaComponent,
    ExamenesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
