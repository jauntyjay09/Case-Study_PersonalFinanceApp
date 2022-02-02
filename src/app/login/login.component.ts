import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  loginForm = new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required])
  })

  get email(){return this.loginForm.get('email')}
  get password(){return this.loginForm.get('password')}

  
  login(){
    if(this.loginForm.value.email='jay@gmail.com' && this.loginForm.value.password =='123'){
      alert('login Successfull ');
      this.loginForm.reset();
      localStorage.setItem('token',"fbfeytfyeigdyge6734r564t7rbdf7n4tr67bf7eufdchgrfrt46yedhbdfttr5ftdeghsxb");
      localStorage.setItem('userType','Client');
      this.router.navigate(['users/buddy']);
    }
    else{
      alert("Invalid Creds Used");
    }
  }

  ngOnInit(): void {
    //delete all tokens
    localStorage.clear();
  }

}
 