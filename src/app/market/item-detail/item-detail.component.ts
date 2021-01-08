import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { ShoppingBasketComponent } from "src/app/shopping-basket/shopping-basket.component";
import { ShoppingBasketService } from "src/app/shopping-basket/shopping-basket.service";
import { Item } from "../../shared/item.model";
import { ItemService } from "../item.service";

@Component({
    selector: 'app-item-detail',
    templateUrl: './item-detail.component.html'
})
export class ItemDetailComponent implements OnInit{
    item : Item;
    id: number;
    constructor(private itemService: ItemService, private route: ActivatedRoute, 
        private sbService: ShoppingBasketService){}

    ngOnInit(){
        this.route.params.subscribe((params: Params) => {
            this.id = +params['id'];
            this.item = this.itemService.getItem(this.id);
        });

    }

    onAddToShoppingBasket(){
        this.itemService.addItemsToShoppingBasket(this.item.baketItem);

    }
}