import { Injectable } from '@angular/core';
import { IUser } from './user.model';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
    currentUser: IUser;

    constructor(private http: Http) {

    }

    loginUser(userName: string, password: string) {

        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        const loginInfo = { username: userName, password: password };
        return this.http.post('/api/login', JSON.stringify(loginInfo), options)
            .do((response: Response) => {
                if (response) {
                    this.currentUser = <IUser>response.json().user;
                }
            })
            .catch((error: Response) => {
                return Observable.of(false);
            });
    }

    checkAuthenticationStatus() {
        return this.http.get('/api/currentIdentity')
            .map((response: any) => {
                if (response._body) {
                    return response.json();
                } else {
                    return {};
                }
            })
            .do(currentUser => {
                if (!!currentUser.userName) {
                    this.currentUser = currentUser;
                }
            })
            .subscribe();
    }

    updateCurrentUser(firstName: string, lastName: string) {
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;

        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });

        return this.http.put(`/api/users/${this.currentUser.id}`,
            JSON.stringify(this.currentUser), options);

    }

    logOut() {
        this.currentUser = undefined;
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });

        return this.http.post('/api/logout', JSON.stringify({}), options);
    }

    isAuthenticated(): boolean {
        return !!this.currentUser;
    }

}
