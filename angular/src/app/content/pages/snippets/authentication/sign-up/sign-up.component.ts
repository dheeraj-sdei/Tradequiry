import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup, FormControl,NgForm, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import{ FormsModule } from '@angular/forms';
import { User } from './user.model';
import {ErrorStateMatcher} from '@angular/material/core';
import { MatFormField } from '@angular/material';
import { UserService } from './user.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  providers:[UserService],
})

export class SignUpComponent implements OnInit {

   user: User = new User();
  userData = [];
  // btnText = "Save";
  constructor(private route: Router,private userService: UserService ) {
  }
   ngOnInit() {
  }
  
// signup() : void {
//     this.router.navigate(["login"]);
//     }
saveData() {
  this.userService.saveData(this.user).subscribe(x => {
   
    if (x.userResponse.message == "success") {
         //this.getAllData();
        // this.route.navigate(["/"]);
         alert("Please check your email for verification");
     }     else {  
         console.log("hello its me")        
              alert(x.userResponse.message);
     }
 })
 }
// getAllData() {
//   this.userService.getAllData().subscribe(x => {
//       if (x.userResponse.message == "success") {
//           this.userData = x.userResponse.userData;
//       }
//       else {
//           alert(x.userResponse.message);
//       }
//   })pkill
// }
}



