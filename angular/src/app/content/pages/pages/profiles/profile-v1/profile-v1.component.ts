import { Component, OnInit } from '@angular/core';

import { UserService } from '../../../snippets/authentication/login/user.service';
import { JwtService } from '../../../snippets/authentication/login/jwt.service';
import { User } from '../../../snippets/authentication/login/user.model';
@Component({
  selector: 'app-profile-v1',
  templateUrl: './profile-v1.component.html',
  styleUrls: ['./profile-v1.component.scss']
})


export class ProfileV1Component implements OnInit {
  id: any;
  userName: any = 'demo';
  // userDetail: any;
  Position:string;
  myToken: string;
  userDetail: User = new User();
  constructor(private UserService : UserService,private jwtService: JwtService) { 
   
  }

  

  ngOnInit() {
    this.UserService.getId().subscribe(res => {
      this.id = res;
      console.log(this.id)
      this.loadUser();
  });
  this.UserService.mysubject.subscribe(userName => {
    this.userName = userName;
  });
  this.UserService.myPosition.subscribe(Position => {
    this.Position = Position;
    console.log("mmmmmmmmmmmm"+Position);
  });
this.UserService.getToken().subscribe(res => {
    this.myToken = res;
});
  }

  loadUser() {
    this.UserService.loadUser(this.id).subscribe(
      res => {
        console.log(res);
        this.userDetail = res.userResponse.userData[0];
        console.log("this.userDetail", this.userDetail)
      },
      err => {
        console.log(err.error.message);
        alert(err.error.message);
      }
    )

    // this.httpClient.post("http://localhost:3000/api/calendar-events/",{"EmailId":"fdfd","Password":"dfdf"}).subscribe(vall=>console.log(vall));
  }

  updateProfie(){
    {
      let username = this.userDetail.Username;
      var Position=this.userDetail.Position;
      this.UserService.updateProfile(this.userDetail).subscribe(x => {
        if (x.userResponse.message == "success") {
          //console.log("xxxxxxxxxxxxxxxxx", x)
          this.UserService.getUserName(username);
            this.jwtService.saveUsername(username);
           this.UserService.getPosition(Position);
            this.jwtService.savePosition(Position);
            //  alert("Profile has been updated successfully");
         }     else {     
                  // alert(x.userResponse.message);
         }
     })
     }
  }

  

  // Username: req.body.Username,
  //           Phone: req.body.Phone,
  //           Address: req.body.Address,
  //           Position: req.body.Position,

  //           Age: req.body.Age
}
