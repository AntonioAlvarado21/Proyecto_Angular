import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Codes } from './pages/codes/codes.component';

const routes: Routes = [
  {path: 'codigo', component: Codes}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
