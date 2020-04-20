import { Component, OnInit } from '@angular/core';
import{ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userID: any;
  userTitle: any;
  userFName: any;
  userLName: any;
  userEmail: any;
  userDob: any;
  userPhone: any;

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userID = params['id']; 

      if(params['title'] == 1){
        this.userTitle = 'Mr';
      }else if(params['title'] == 2){
        this.userTitle = 'Mrs';
      }else if(params['title'] == 3){
        this.userTitle = 'Prof';
      }
      this.userFName = params['firstName'];
      this.userLName = params['lastName'];
      this.userEmail = params['email'];
      this.userPhone = params['phone'];
      this.userDob = sessionStorage.getItem('dob');
      
    });
  }

}
