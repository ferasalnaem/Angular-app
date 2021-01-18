import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AuthInterceptorService } from "./auth/auth.interceptor.service";
import { ShoppingBasketService } from "./shopping-basket/shopping-basket.service";

@NgModule({
    providers: [
        ShoppingBasketService, 
        {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}
    ],
})
export class CoreModule {

}