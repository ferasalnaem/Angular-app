import { formatCurrency } from '@angular/common';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { BasketItem } from 'src/app/shared/baket-item.model';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { ShoppingBasketService } from '../shopping-basket.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') sbForm : NgForm;
  subscription: Subscription;
  editedItemIndex: number;
  editedItem : BasketItem;


  constructor(private sbService: ShoppingBasketService, private dataStorageService: DataStorageService) { }

  ngOnInit(): void {
    this.subscription = this.sbService.startedEditing.subscribe((index: number) => {
      this.editedItemIndex = index;
      this.editedItem = this.sbService.getbasketItem(index);
      this.sbForm.setValue({
        name: this.editedItem.model,
        amount: this.editedItem.amount,
        imagPath: this.editedItem.imagPath
      })
    });
  }
  onUpdateAmount(form: NgForm){
    const value = form.value;
    const newBasketItem = new BasketItem(value.name,value.imagePath ,value.amount);
    this.sbService.updateBasketItem(this.editedItemIndex, newBasketItem);
    form.reset();

  }
  onDelete(){
    this.sbService.deleteBasketItem(this.editedItemIndex);


  }

  onSaveItems(){
    this.dataStorageService.storeBasketItems();
  }

  onFetchItems(){
    this.dataStorageService.fetchBasketItems().subscribe();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
