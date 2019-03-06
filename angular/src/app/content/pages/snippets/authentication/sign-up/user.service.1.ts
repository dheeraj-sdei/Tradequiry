import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";
import { User } from "../login/user.model";

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };
@Injectable()
export class UserService {

    user: User =new User();
    URL = "";
    constructor(private http: HttpClient) {
        this.URL = "http://localhost:3000/api/user/";
    }
    login(obj): any {
        console.log("here",obj);
        return this.http.post(this.URL +'login', obj, httpOptions).pipe(map(x => {
            return x;
        }))
    }
    saveData(obj): any {
        return this.http.post(this.URL + 'createUser', obj).pipe(map(x => {
            return x;
        }))
    }

}