import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {NotSameEmail} from '../shared/customValidator.validator'; // my custom validator
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //declare variables
  regForm: FormGroup;
  titles = [];
  formatedPN;
  constructor() { }

  ngOnInit() {
    //declare values for the title dropdown
    this.titles = [
      { titleName: 'Mr', val: '1' },
      { titleName: 'Mrs', val: '2' },
      { titleName: 'Prof', val: '3' },
    ];

    //init the reactive form
    this.regForm = new FormGroup({
      title: new FormControl('',Validators.required),
      firstName: new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z ]*$')]),
      lastName: new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z ]*$')]),
      email: new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      conEmail: new FormControl('',[Validators.required]),
      dateOfBirth: new FormControl('',[Validators.required]),
      phoneNumber: new FormControl('',[Validators.required,Validators.minLength(11)]),
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

  //format phone number function
  formatPhone(f: any){
      f = f.slice(0,3)+"-"+f.slice(3,8)+"-"+f.slice(8,11);
      this.formatedPN = f;
      console.log(f);
    }

  register() {

  }

}
