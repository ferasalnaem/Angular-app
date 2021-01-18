import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ItemDetailComponent } from "./item-detail/item-detail.component";
import { ItemStartComponent } from "./item-start/item-start.component";
import { MarketComponent } from "./market.component";

const routes: Routes =[
    {path: 'market', component: MarketComponent, children: [
        {path: '', component:ItemStartComponent},
        {path: ':id', component: ItemDetailComponent}
      ]},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]

})
export class MarketRoutingModule {

}