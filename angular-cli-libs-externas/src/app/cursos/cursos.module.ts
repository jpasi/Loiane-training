import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CusrosListaComponent } from './cusros-lista/cusros-lista.component';


@NgModule({
  declarations: [CusrosListaComponent],
  imports: [
    CommonModule,
    CursosRoutingModule
  ]
})
export class CursosModule { }
