import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { ItemDetailComponent } from './market/item-detail/item-detail.component';
import { ItemStartComponent } from './market/item-start/item-start.component';
import { MarketListComponent } from './market/market-list/market-list.component';
import { MarketComponent } from './market/market.component';
import { ShoppingBasketComponent } from './shopping-basket/shopping-basket.component';

const routes: Routes = [
  {path: '', redirectTo:'/market', pathMatch: 'full'},
  {path: 'market', component: MarketComponent, children: [
    {path: '', component:ItemStartComponent},
    {path: ':id', component: ItemDetailComponent}
  ]},
  {path: 'shopping-basket', component: ShoppingBasketComponent},
  {path: 'auth', component: AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
