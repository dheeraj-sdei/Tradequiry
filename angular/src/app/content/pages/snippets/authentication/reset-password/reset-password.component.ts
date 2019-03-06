import { Component, OnInit } from '@angular/core';
import { User } from '../login/user.model';
import { UserService } from '../login/user.service';
import { Router } from '@angular/router';

import { JwtService } from '../login/jwt.service';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  user: User = new User();
  constructor(private route: Router, private userService: UserService, private jwtService: JwtService,) { }
  userData = [];
  
  ngOnInit() {
  }
  // onSubmit() {
  //   this.changePasswordData = this.changePasswordForm.value;
  //   // console.log(this.changePasswordData);
  //   this.apiService.changePassword(this.changePasswordData).subscribe(
  //     res => {
  //       this.toasterService.showSuccess(res['message'], 'Success');
  //       console.log(res,' =-=-=-=--=');
  //       this.changePasswordForm.reset();
  //       this.router.navigate(['/user']);
  //       // const userDetails = { data : setnewpassword , isLogin : true };
  //       // this.jwtService.saveToken(setnewpassword.token);
  //       // this.apiService.sendIsLoginValue(userDetails);
  //       // this.router.navigate(['/user']);
  //     },
  //     error => {
  //       this.toasterService.showError(error.error.message, 'Error');
  //     }
  //   );
  // }

  onSubmit() {
    console.log("aaaaaaaaaaaaaaaaa", this.user)
    
    this.userService.changePassword(this.user).subscribe(
      res => {
        console.log("resettttttt"+this.user)

        this.route.navigate(['/']);
      },
      err => {
        console.log(err.error.message);
        alert(err.error.message);
      }
    )

    // this.httpClient.post("http://localhost:3000/api/calendar-events/",{"EmailId":"fdfd","Password":"dfdf"}).subscribe(vall=>console.log(vall));
  }
}
