import { Component, OnInit } from "@angular/core";
import { Item } from '../../shared/item.model';
import { ItemService } from "../item.service";

@Component({
    selector: 'app-market-list',
    templateUrl: './market-list.component.html'
})
export class MarketListComponent implements OnInit{
    items : Item[] = [];

    constructor(private itemService: ItemService){}



    ngOnInit(){
        this.items = this.itemService.getItems();
    }

}