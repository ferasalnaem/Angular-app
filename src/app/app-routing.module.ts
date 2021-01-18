import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  {path: '', redirectTo:'/market', pathMatch: 'full'},
  // {path: 'shopping-basket', loadChildren: './shopping-basket/shopping.module#ShoppingModule'},
  {path: 'shopping-basket', loadChildren: () => import('./shopping-basket/shopping.module').then (m => m.ShoppingModule) }, //Lazy loading
  {path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
