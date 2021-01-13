import { Injectable } from "@angular/core";
import {HttpHandler, HttpInterceptor, HttpParams, HttpRequest} from '@angular/common/http';
import { AuthService } from "./auth.service";
import { exhaustMap, take } from "rxjs/operators";

@Injectable()
export class AuthInterceptorService {
    constructor(private authService: AuthService) {}

   intercept(req: HttpRequest<any>, next:HttpHandler) {
    return this.authService.user.pipe(
        take(1), 
        exhaustMap(user => {
            if(!user) {
                return next.handle(req);  // if we don't have a user then we handle the origin req, because when we sign in/up we have a null user
            }
            const modifiedReq = req.clone({
                params: new HttpParams().set('auth', user.token)
            });
            return next.handle(modifiedReq);
        }));
    
   }

}