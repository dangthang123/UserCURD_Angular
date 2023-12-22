import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE } from '../BASE';
import { User } from '../interface/user';

@Injectable({
    providedIn: 'root'
})
export class CommonService {

    constructor(
        private http: HttpClient) {
    }
    getAllUser(): Observable<any> {
        return this.http.get(BASE.URL);
    }
    createUser(data: User): Observable<any> {
        return this.http.post(BASE.URL, { ...data })
    }
    deleteUser(id: string): Observable<any> {
        const url = `${BASE.URL}/${id}`;
        return this.http.delete(url);
    }
    editUser(id: string, data: any): Observable<any> {
        const url = `${BASE.URL}/${id}`;
        return this.http.put(url, data);
    }


}
