import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ServerService } from '../server.service';

export interface User{
  userName: string;
  email: any;
  password: any;
}

@Component({
  selector: 'app-login-account',
  templateUrl: './login-account.component.html',
  styleUrls: ['./login-account.component.css']
})
export class LoginAccountComponent implements OnInit {
public login:FormGroup;
public dataValue:any ;
 
  constructor(private getService:ServerService,private router:Router,private formBuilder:FormBuilder) { 
    this.login = this.formBuilder.group({
      userName:["",[Validators.required,Validators.minLength(3),Validators.maxLength(15)]],
      email:["",[Validators.required,Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
      password:["",[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{6,}')] ],
    })
  }

  ngOnInit(): void {
  }
  get userName() {
    // console.log(this.username)
    return this.login.get('userName')
  };
  get username(){
    // console.log(this.registoration.get('userName')?.errors?.minLength)
    return !this.login.get('userName')?.errors?.required
  }

  get email(){
    return this.login.get('email')
  }

  get password(){
    return this.login.get('password');
  }

getData() {
  this.getService.loginData(this.login.value)
  .subscribe(
    (res:any) => {
      console.log(res)
      localStorage.setItem("token",res.token)
      this.router.navigateByUrl("/userDetails")
    }
  )
  
}
}
