import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MarketComponent } from './market/market.component';
import { ShoppingBasketComponent } from './shopping-basket/shopping-basket.component';
import { MarketListComponent } from './market/market-list/market-list.component';
import { ItemDetailComponent } from './market/item-detail/item-detail.component';
import { ShoppingEditComponent } from './shopping-basket/shopping-edit/shopping-edit.component';
import { MarketItemComponent } from './market/market-list/market-item/market-item.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingBasketService } from './shopping-basket/shopping-basket.service';
import { ItemStartComponent } from './market/item-start/item-start.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './auth/auth.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { AuthInterceptorService } from './auth/auth.interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MarketComponent,
    MarketListComponent,
    MarketItemComponent,
    ItemDetailComponent,
    ShoppingBasketComponent,
    ShoppingEditComponent,
    DropdownDirective,
    ItemStartComponent,
    AuthComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ShoppingBasketService, {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
