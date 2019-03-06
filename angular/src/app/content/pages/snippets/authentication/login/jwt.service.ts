import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtService {
  constructor(){
  }
  getToken() : string {
    return window.localStorage.getItem('jwtToken');
  }
  saveToken(token : string){
      window.localStorage.setItem('jwtToken',token);
  }
  destroyToken(){
      window.localStorage.removeItem('jwtToken');
      localStorage.removeItem('username');
  }
  saveUsername(username : string){
      localStorage.setItem('username',username);
  }
  getUsername(){
      return localStorage.getItem('username');
  }

///position///
savePosition(Position : string){
    localStorage.setItem('Position',Position);
}
getPosition(){
    return localStorage.getItem('Position');
}

/////
  saveId(id : any){
    localStorage.setItem('id',id);
}
  
getId(){
    return localStorage.getItem('id');
}

}
