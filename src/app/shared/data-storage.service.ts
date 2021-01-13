import { Injectable } from "@angular/core";
import {HttpClient, HttpParams} from '@angular/common/http';
import { ShoppingBasketService } from "../shopping-basket/shopping-basket.service";
import { BasketItem } from "./baket-item.model";
import { AuthService } from "../auth/auth.service";
import { exhaustMap, take, tap } from "rxjs/operators";

@Injectable({providedIn: 'root'})
export class DataStorageService {
    constructor(private http : HttpClient, private sbService: ShoppingBasketService, private authService: AuthService){}


    storeBasketItems(){
        const basektItems = this.sbService.getBasketItems();
        this.http.put('https://shopping-market-428c0-default-rtdb.firebaseio.com/items.json',basektItems).subscribe( response => {
            console.log(response);
        });
    }

    fetchBasketItems(){
            return this.http.get<BasketItem[]>('https://shopping-market-428c0-default-rtdb.firebaseio.com/items.json').pipe(
                tap (BasketItems => {
                    this.sbService.setItems(BasketItems);
                })
            );
        
    }



    // fetchBasketItems() {
    //     this.http.get<BasketItem[]>('https://shopping-market-428c0-default-rtdb.firebaseio.com/items.json').subscribe( basketItems => {
    //         this.sbService.setItems(basketItems);
    //     })
    // }   

    

}