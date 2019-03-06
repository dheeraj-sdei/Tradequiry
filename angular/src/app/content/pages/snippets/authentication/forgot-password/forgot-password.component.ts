import { Component, OnInit } from '@angular/core';
//import { Injectable } from '@angular/core';
//import * as firebase from 'firebase';
import { User } from '../login/user.model';
import { UserService } from '../login/user.service';
import { JwtService } from '../login/jwt.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
//@Injectable()
export class ForgotPasswordComponent implements OnInit {
  user: User = new User();
 
  email:any;
  constructor(private route: Router, private userService: UserService ) {}
  // resetPassword(email: string) {
  // var auth = firebase.auth();
  //   return auth.sendPasswordResetEmail(email)
  //     .then(() => console.log("email sent"))
  //     .catch((error) => console.log(error))
  // }
  ngOnInit() {
  }
  click()
  {
  this.email= { EmailId : this.user.EmailId}
    console.log("aaaaaa"+this.user.EmailId)
     
    this.userService.forgotPassword(this.email).subscribe(
      res => {
       
        alert("Please check your Email to Re-set Password");

        //this.route.navigate(['/dashboard/home']);
      },
      err => {
        console.log(err.error.message);
        alert(err.error.message);
      }
    )
  }
  }

