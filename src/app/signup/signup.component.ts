import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor (private router :Router){}

   signupForm = new FormGroup({
      fullname:new FormControl('',Validators.required),
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required]),
      mobile:new FormControl('',[Validators.required])
   })
   get email(){return this.signupForm.get('email')}
   get password(){return this.signupForm.get('password')}
   get fullname(){return this.signupForm.get('fullname')}
   get mobile(){return this.signupForm.get('mobile')}   

  
  signUp(){

    //post the values in db
    alert("signup Successfull");
    this.signupForm.reset();
    this.router.navigate(['login']);

  }
  ngOnInit(): void {
  }

}
