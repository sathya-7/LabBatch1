import { Component, OnChanges, OnInit } from '@angular/core';
import { ServerService } from '../server.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordValidator } from './password.validator';

export type register1 = {
  confirmPassword: string,
  email: string,
  password: string,
  userName: string
}



@Component({
  selector: 'app-register-an-account',
  templateUrl: './register-an-account.component.html',
  styleUrls: ['./register-an-account.component.css']
})
export class RegisterAnAccountComponent implements OnInit, OnChanges {
  
  public registoration : FormGroup;
  // ({
  //   userName: new FormControl("", Validators.required),
  //   email: new FormControl("", Validators.required),
  //   password: new FormControl("", Validators.required),
  //   confirmPassword: new FormControl("", Validators.required)
  // });
  constructor(private service: ServerService, private formBuilder:FormBuilder) { 
    this.registoration = this.formBuilder.group({
      userName:["",[Validators.required,Validators.minLength(3),Validators.maxLength(15)]],
      email:["",[Validators.required,Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
      password:["",[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{6,}')] ],
      confirmPassword:["",Validators.required],
    },{validator:PasswordValidator});
  }
  
  ngOnChanges() { 
  }
  
  ngOnInit() {
   }
  
  get userName() {
    // console.log(this.username)
    return this.registoration.get('userName')
  };
  get username(){
    // console.log(this.registoration.get('userName')?.errors?.minLength)
    return !this.registoration.get('userName')?.errors?.required
  }

  get email(){
    return this.registoration.get('email')
  }

  get password(){
    return this.registoration.get('password');
  }
  get confirmPassword(){
    return this.registoration.get('confirmPassword');
  }

  sendData() {
    this.service.registerData(this.registoration.value)
      .subscribe(res => console.log(res),
        (err) => console.log(err));
  }
}
