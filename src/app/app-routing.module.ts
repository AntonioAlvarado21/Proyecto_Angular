import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Codes } from './pages/codes/codes.component';

const routes: Routes = [
  { path: 'products', loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule) },
  {path: '**', redirectTo: '', pathMatch: 'full'}, //Las rutas deben estar en orden y poner al ultimo la ruta de error
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
