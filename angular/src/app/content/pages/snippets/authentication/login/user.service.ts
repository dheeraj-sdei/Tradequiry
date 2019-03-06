import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";

import { JwtService } from './jwt.service';

import { Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
// import { Observable } from 'rxjs';
// import { BehaviorSubject } from 'rxjs/BehaviorSubject';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
    })
};
@Injectable()
export class UserService {


    private subject = new BehaviorSubject<any>(localStorage.getItem('username'));
    public mysubject = this.subject.asObservable();


    private tokenId = new BehaviorSubject<any>(localStorage.getItem('jwtToken'));
    public myTokenId = this.tokenId.asObservable();

    private id = new BehaviorSubject<any>(localStorage.getItem('id'));
    public myId = this.id.asObservable();

////////////////
private Position = new BehaviorSubject<any>(localStorage.getItem('Position'));
    public myPosition = this.Position.asObservable();

    gethttpOptions() {
        let token = this.jwtService.getToken();
        let httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-auth-token': token
            })
        };
        return httpOptions;
    }
    // getUserName(): Observable<any> {
    //     return this.subject.asObservable();
    // }
    getPosition(Position) {
        this.Position.next(Position);
      }
      getUserName(userName) {
        this.subject.next(userName);
      }
    getToken(): Observable<any> {
        return this.tokenId.asObservable();
    }
    getId(): Observable<any> {
        return this.id.asObservable();
    }


    sendUserName(data) {
        this.subject.next(data);
    }


    URL = "";
    constructor(private http: HttpClient, private jwtService: JwtService) {
        this.URL = "http://54.71.18.74:4517/api/user/";
        //this.URL = "http://localhost:4517/api/user/";
    }
    login(obj): any {
        //console.log("here",obj);
        return this.http.post(this.URL + 'login', obj).pipe(map(x => {
            return x;
        }))
    }
    saveData(obj): any {
        return this.http.post(this.URL + 'createUser', obj).pipe(map(x => {
            return x;
        }))
    }

    loadUser(token): any {
        return this.http.get(this.URL+'loadUser/'+token).pipe(map(x => {
            return x;
        }))
    }
    updateProfile(obj): any {
        return this.http.post(this.URL + 'updateUser', obj).pipe(map(x => {
            return x;
        }))
    }

    forgotPassword(obj): any {
        return this.http.post(this.URL+'forgotPassword',obj).pipe(map(x => {
            return x;
        }))
    }
    
    changePassword(obj): any {
        return this.http.post(this.URL+'changePassword',obj).pipe(map(x => {
            return x;
        }))
    }
}