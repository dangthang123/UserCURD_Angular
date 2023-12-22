import { Injectable } from '@angular/core';


const TOKEN_KEY = 'auth-token';
const USER_KEY = 'user-token';
@Injectable({
    providedIn: 'root',
})
export class TokenService {
    constructor() { }
    signOut(): void {
        window.localStorage.clear();
    }
    saveToken(token: string): void {
        window.localStorage.setItem(TOKEN_KEY, token);
    }
    getToken(): string | null {
        return window.localStorage.getItem(TOKEN_KEY);
    }

    saveUser(data: any): void {
        const jsonData = JSON.stringify(data);
        window.localStorage.setItem(USER_KEY, jsonData);
    }
    getUser(): string | null {
        return window.localStorage.getItem(USER_KEY);
    }
    // Kiểm tra token
    isTokenValid(): boolean {
        const storedToken = this.getToken();
        const userDataString = window.localStorage.getItem(USER_KEY);

        if (storedToken && userDataString) {
            const userData: any = JSON.parse(userDataString);
            if (userData && userData.token) {
                return storedToken === userData.token;
            }
        }

        return false;
    }
    getUserRoles(): string | undefined {
        const dataString = window.localStorage.getItem(USER_KEY);
        const data: string | null = dataString !== null ? dataString : null;

        if (data !== null) {
            const userData = JSON.parse(data);
            return userData.permission;
        }

        return undefined;
    }

}