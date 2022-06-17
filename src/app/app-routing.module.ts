import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { NoticiasComponent } from './Componentes/noticias/noticias.component';
import { InformacionComponent } from './Componentes/informacion/informacion.component';
import { ProfesionalesComponent } from './Componentes/profesionales/profesionales.component';
import { IniciosesionComponent } from './Usuario/iniciosesion/iniciosesion.component';
import { RegistroComponent } from './Usuario/registro/registro.component';

const routes: Routes = [
  {path:"",component:InicioComponent},
  {path:"noticias/:id",component:NoticiasComponent},
  {path:"informacion",component:InformacionComponent},
  {path:"profesionales",component:ProfesionalesComponent},
  {path:"inicio",component:IniciosesionComponent},
  {path:"registro",component:RegistroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
