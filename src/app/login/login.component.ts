import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {LoginService} from '../services/login.service';
import{ActivatedRoute } from '@angular/router';
declare var $: any; //needed for jquery

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  userEmail;
  userID;
  errorMsg;
  constructor(private loginService:LoginService,private route:ActivatedRoute ) { }
  ngOnInit() {
    //to fetch parameters from url
    this.route.params.subscribe(params => {
      this.userID = params['id']; 
      this.userEmail = params['email'];
    });
    //generate a login form
    this.loginForm = new FormGroup({
      email: new FormControl({value:this.userEmail,disabled:true},Validators.required),
      password: new FormControl('',Validators.required),
    });
  }
  //login function
  login(){
    this.loginService.login(this.loginForm.value['email'],this.loginForm.value['password']).subscribe((res)=>{
      if(res === 400){
        this.errorMsg = 'The user with ID ' + this.userID + ' and email ' + this.userEmail + ' cannot be logged in';
        $('#loginmodal').modal('show');
      }
    })
  }

}
