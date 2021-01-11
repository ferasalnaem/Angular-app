import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import { ShoppingBasketService } from "../shopping-basket/shopping-basket.service";
import { BasketItem } from "./baket-item.model";

@Injectable({providedIn: 'root'})
export class DataStorageService {
    constructor(private http : HttpClient, private sbService: ShoppingBasketService){}


    storeBasketItems(){
        const basektItems = this.sbService.getBasketItems();
        this.http.put('https://shopping-market-428c0-default-rtdb.firebaseio.com/items.json',basektItems).subscribe( response => {
            console.log(response);
        });
    }

    fetchBasketItems(){
        this.http.get<BasketItem[]>('https://shopping-market-428c0-default-rtdb.firebaseio.com/items.json').subscribe( basketItems => {
            this.sbService.setItems(basketItems);
        }

        )

    }

}