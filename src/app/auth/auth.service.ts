import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthResponse } from "./auth.model";
import {catchError, tap} from 'rxjs/operators';
import {BehaviorSubject, Subject, throwError} from 'rxjs';
import { ɵangular_packages_platform_browser_platform_browser_k } from "@angular/platform-browser";
import { User } from "./user.model";
import { Router } from "@angular/router";

@Injectable({providedIn: 'root'})
export class AuthService {
    user = new BehaviorSubject<User>(null);

    constructor( private http: HttpClient, private router: Router) {}


    sigup(email: string, password: string) {
        return this.http.post<AuthResponse>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB0NEwEss6uXdRYAWl55AMQRfV5wYbo7q8',
            {
                email: email,
                password: password,
                returnSecureToken: true

            }).pipe(catchError(this.handleError), tap( resData => {
                this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
            }));
                
            

    }

    login(email: string, password: string) {
        return this.http.post<AuthResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB0NEwEss6uXdRYAWl55AMQRfV5wYbo7q8', {
            email: email,
            password: password,
            returnSecureToken: true
        }).pipe(catchError(this.handleError), tap( resData => {
            this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
        }));
    }
    logout() {
        this.user.next(null);
        this.router.navigate(['/auth']);
    }


    private handleAuthentication(email: string, userId: string, token: string, expiresIn: number) {
        
        const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
        const user = new User(email, userId, token, expirationDate);
        this.user.next(user)
    }

    private handleError(errorRes: HttpErrorResponse) {
        let errorMessage = 'An unknown error occured!';
                if(!errorRes.error || !errorRes.error.error){
                    return throwError(errorMessage);
                }
                switch(errorRes.error.error.message){
                    case 'EMAIL_EXISTS':
                        errorMessage = 'this email exists already!';
                        break;
                    case 'EMAIL_NOT_FOUND':
                        errorMessage = 'This email does not exist!';
                        break;
                    case 'IVALID_PASSWORD':
                        errorMessage = 'This passowrd is not correct!';
                        break;
                        
                }
                return throwError(errorMessage);
    }
}