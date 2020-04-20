import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators } from '@angular/forms';
import {NotSameEmail} from '../validators/EmailConfirmation.validator'; // my custom validator
import {RegistrationService} from '../services/registration.service';
import{CheckemailexistenceService} from '../services/checkemailexistence.service';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  //declare variables
  regForm: FormGroup;
  titles = [];
  userID;
  emailExistErr;
  constructor(private datasender: RegistrationService, private router: Router, private emailChecker: CheckemailexistenceService) {}

  ngOnInit() {
    //declare values for the title dropdown
    this.titles = [
      { titleName: 'Mr', val: '1' },
      { titleName: 'Mrs', val: '2' },
      { titleName: 'Prof', val: '3' },
    ];
    //to create tge form and apply validators
    this.regForm = new FormGroup({
      title: new FormControl('',Validators.required),
      firstName: new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z ]*$')]),
      lastName: new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z ]*$')]),
      email: new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      conEmail: new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      dateOfBirth: new FormControl('',[Validators.required]),
      phoneNumber: new FormControl('',[Validators.required,Validators.minLength(13),Validators.pattern("([0-9]{3})+-([0-9]{5})+-([0-9]{3})")]),
      password: new FormControl('',[Validators.required,Validators.minLength(8),Validators.pattern("^[a-zA-Z0-9]*$")]),
    }, { validators: NotSameEmail });

  }

  //get the current values of each field in the form
  get title() { return this.regForm.get('title') }
  get firstName() { return this.regForm.get('firstName') }
  get lastName() { return this.regForm.get('lastName') }
  get email() { return this.regForm.get('email') }
  get conEmail() { return this.regForm.get('conEmail') }
  get dateOfBirth() { return this.regForm.get('dateOfBirth') }
  get phoneNumber() { return this.regForm.get('phoneNumber') }
  get password() { return this.regForm.get('password') }

//user registaration function
  register() {  
    this.emailChecker.findEmail(this.regForm.value['email']).subscribe(data=>{
     if(data === undefined){
      this.datasender.registerUser(this.regForm.value['email']).subscribe((res)=>{
        this.userID = res['id'];
        $('#modal').modal('show');
      });
      sessionStorage.setItem('dob',this.dateOfBirth.value);
     }else{
       this.emailExistErr = 'This Email exists';
       $('#modalEmailExist').modal('show');
     }
   })
  } 
}
