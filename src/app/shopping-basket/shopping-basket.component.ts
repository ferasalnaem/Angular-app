import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BasketItem } from '../shared/baket-item.model';
import { Item } from '../shared/item.model';
import { ShoppingBasketService } from './shopping-basket.service';

@Component({
  selector: 'app-shopping-basket',
  templateUrl: './shopping-basket.component.html',
  styleUrls: ['./shopping-basket.component.css']
})
export class ShoppingBasketComponent implements OnInit, OnDestroy {
  basketItems: BasketItem[];
  private bIChangeSub: Subscription;

  constructor(private sbService: ShoppingBasketService) { }

  ngOnInit() {
    this.basketItems = this.sbService.getBasketItems();
    this.bIChangeSub = this.sbService.basketItemsChanged.subscribe((basketItems: BasketItem[]) =>{
      this.basketItems= basketItems;
    });
  }

  onBasketItemAdded(basketItem: BasketItem){
    this.basketItems.push(basketItem);
  }

  onEditItem(index: number){
    this.sbService.startedEditing.next(index);
  }

  ngOnDestroy(): void {
    this.bIChangeSub.unsubscribe();
  }

}
