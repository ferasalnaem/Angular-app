import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HeaderComponent } from "../header/header.component";
import { SharedModule } from "../shared/shared.module";
import { ItemDetailComponent } from "./item-detail/item-detail.component";
import { ItemStartComponent } from "./item-start/item-start.component";
import { MarketItemComponent } from "./market-list/market-item/market-item.component";
import { MarketListComponent } from "./market-list/market-list.component";
import { MarketRoutingModule } from "./market-routing.module";
import { MarketComponent } from "./market.component";

@NgModule({
    declarations: [
        MarketComponent,
        MarketListComponent,
        MarketItemComponent,
        ItemDetailComponent,
        ItemStartComponent
    ],
    imports: [
        RouterModule, SharedModule, MarketRoutingModule
    ]
})
export class MarketModule {

}