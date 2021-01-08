import { Injectable } from '@angular/core';
import { BasketItem } from '../shared/baket-item.model';
import { Item } from '../shared/item.model';
import { ShoppingBasketService } from '../shopping-basket/shopping-basket.service';
@Injectable()
export class ItemService{

    private items : Item[] = [
        new Item('Apple iPhone', 
        'Apple iPhone 12 Pro Max 5G Dual eSIM 256GB 6GB RAM Graphite Gray', 
        'https://www.dallasng.com/wp-content/uploads/2020/10/apple-iphone-12-pro-2.jpg',
        'Super Retina XDR OLED',
        256,
        'Dual-LED dual-tone flash',[new BasketItem('Apple iPhone','https://www.dallasng.com/wp-content/uploads/2020/10/apple-iphone-12-pro-2.jpg',1)]
        ),
        new Item('Samsung Galaxy', 
        'Samsung Galaxy Note 20 Ultra 5G Dual SIM 256GB 12GB RAM SM-N986B/DS Mystic Black', 
        'https://m.media-amazon.com/images/I/71wOFP9p3rL._AC_SS350_.jpg',
        'Dynamic AMOLED 2X capacitive touchscreen',
        256,
        'LED flash, auto-HDR, panorama ', [new BasketItem('Samsung Galaxy','https://m.media-amazon.com/images/I/71wOFP9p3rL._AC_SS350_.jpg',1)])
      ];

      constructor(private sbService: ShoppingBasketService){}

      getItems() {
          return this.items.slice();
      }

      getItem(index: number){
          return this.items[index];
      }

      addItemsToShoppingBasket(basketItem: BasketItem[]){
          this.sbService.addItems(basketItem);

      }
}