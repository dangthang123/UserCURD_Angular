import { Injectable } from '@angular/core';


const TOKEN_KEY = 'auth-token';
@Injectable({
    providedIn: 'root',
})
export class TokenService {
    constructor() { }
    signOut(): void {
        window.localStorage.clear();
    }
    saveToken(data: any): void {
        const jsonData = JSON.stringify(data);
        window.localStorage.setItem(TOKEN_KEY, jsonData);
    }
    getToken(): string | null {
        return window.localStorage.getItem(TOKEN_KEY);
    }
}