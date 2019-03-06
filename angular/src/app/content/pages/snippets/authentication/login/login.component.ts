import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user.model';
import { UserService } from './user.service';
import { JwtService } from './jwt.service';
// import { HttpClient } from "@angular/common/http";
// import { HttpHeaders } from '@angular/common/http';

//import {MatDialog} from '@angular/material';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: User = new User();
  token: any;
  username: any;
  id: any;
  constructor(private route: Router, private userService: UserService, private jwtService: JwtService, ) {
  }

  login() {
    //console.log("aaaaaaaaaaaaaaaaa", this.user)
    this.userService.login(this.user).subscribe(
      res => {
        console.log("res['data']['_id']", res['data']['_id']);

        this.token = res['token'];
        this.id = res['data']['_id'];
        this.username = res['data']['Username'];
        this.userService.sendUserName(this.username);
        console.log(this.username, "user name");
        this.jwtService.saveToken(this.token);
        this.jwtService.saveUsername(this.username);
        this.jwtService.saveId(this.id);


        this.route.navigate(['/dashboard/home']);
      },
      err => {
        console.log(err.error.message);
        alert(err.error.message);
      }
    )

    // this.httpClient.post("http://localhost:3000/api/calendar-events/",{"EmailId":"fdfd","Password":"dfdf"}).subscribe(vall=>console.log(vall));
  }

  ngOnInit() {

    let token = this.jwtService.getToken();
    if (token) {
      this.route.navigate(['/dashboard/home']);
    }
    else {
      this.route.navigate(['/']);
    }

  }

}



