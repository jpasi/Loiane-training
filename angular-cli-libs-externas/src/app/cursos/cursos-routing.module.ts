import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CusrosListaComponent } from './cusros-lista/cusros-lista.component';

const routes: Routes = [
  { path: '', component: CusrosListaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
