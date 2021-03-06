import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Codes } from './pages/codes/codes.component';

const routes: Routes = [
  {path: '', redirectTo: '/products', pathMatch: 'full'}, //Linea para redirigir de la ruta Home a Products automaticamente
  { path: 'products', loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule) },
  { path: 'checkout', loadChildren: () => import('./pages/checkout/checkout.module').then(m => m.CheckoutModule) },
  {path: '**', redirectTo: '', pathMatch: 'full'}, //Las rutas deben estar en orden y poner al ultimo la ruta de error
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
