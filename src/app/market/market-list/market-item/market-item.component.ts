import { Component, Input, OnInit } from "@angular/core";
import { Item } from "../../../shared/item.model";


@Component({
    selector: 'app-market-item',
    templateUrl: './market-item.component.html'

})
export class MarketItemComponent implements OnInit{
    @Input() item: Item;
    @Input() index: number;

    ngOnInit(){

    }
}