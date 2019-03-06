import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
@Injectable()
export class UserService {
    URL = "";
    constructor(private http: HttpClient) {
        //this.URL = "http://localhost:3000/api/user/";
        this.URL = "http://54.71.18.74:4517/api/user/";
         // this.URL = "http://localhost:4517/api/user/";
    }
    ///user: User =new User();
    saveData(obj): any {
        return this.http.post(this.URL + 'createUser', obj,).pipe(map(x => {
            return x;
        }))
    }
    getAllData(): any {
        return this.http.get(this.URL + 'getAllUser').pipe(map(x => {
            return x;
        }))
    }
    
}