import { Subject } from "rxjs";
import { BasketItem } from "../shared/baket-item.model";
import { Item } from "../shared/item.model";

export class ShoppingBasketService{
    basketItemsChanged = new Subject<BasketItem[]>();
    startedEditing = new Subject<number>();
   private basketItems: BasketItem[] =[]; 
   getBasketItems(){
       return this.basketItems.slice();
   }

   getbasketItem(index: number) {
       return this.basketItems[index];
   }

   addItems(basketItems: BasketItem[]){
       this.basketItems.push(...basketItems);
       this.basketItemsChanged.next(this.basketItems.slice());

   }

   updateBasketItem(index: number,  newBasketItem: BasketItem){
       this.basketItems[index] = newBasketItem;
       this.basketItemsChanged.next(this.basketItems.slice());
   }
}