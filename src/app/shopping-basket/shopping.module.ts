import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { ShoppingBasketComponent } from "./shopping-basket.component";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { ShoppingRoutingModule } from "./shopping-routing.module";

@NgModule({
    declarations: [
        ShoppingBasketComponent,
        ShoppingEditComponent,
    ],
    imports: [RouterModule, SharedModule,FormsModule, ShoppingRoutingModule]
})
export class ShoppingModule {

}