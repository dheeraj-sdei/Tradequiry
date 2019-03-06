import { Injectable } from '@angular/core';
import { JwtService } from './jwt.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  token: string;

  constructor(private jwtService : JwtService) { }
  isAuthenticated(){
    this.token = this.jwtService.getToken();
    return this.token != null;
  }
}
