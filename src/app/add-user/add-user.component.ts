import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PasswordValidator } from '../register-an-account/password.validator';
import { ServerService } from '../server.service';

export interface user {
  confirmPassword: string,
  email: string,
  emailConfirmed: true,
  id: string,
  password: string,
  phoneNumber: string,
  roleId: string,
  userId: string,
  userName: string
}

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  public addUser: FormGroup;
  public response: any;
  constructor(private service: ServerService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder) {
    this.route.paramMap.subscribe(params => {
      const id = String(params.get("id"));
    });

    this.addUser = this.formBuilder.group({
      userName: ["",[Validators.required,Validators.minLength(3),Validators.maxLength(15)]],
      email: ["",[Validators.required,Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
      password: ["",[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{6,}')]],
      emailConfirmed: ['true'],
      id: ["",Validators.required],
      phoneNumber: [,[Validators.required,Validators.maxLength(10)]],
      roleId: ["",Validators.required],
      userId: ['',Validators.required],
      confirmPassword: ["",Validators.required],
  },{validator:PasswordValidator})
  }

  ngOnInit(): void {
  }

  sendData() {
    this.service.postData(this.addUser.value).subscribe();
  }
  deleteData(){
    console.log(this.addUser.value.id)
    this.service.deleteData(this.addUser.value.id)
    .subscribe(
      res => console.log("sucess"),
      err => console.log("failed"),
    )
  }
  get userName() {
    // console.log(this.username)
    return this.addUser.get('userName')
  };
  get username(){
    // console.log(this.registoration.get('userName')?.errors?.minLength)
    return !this.addUser.get('userName')?.errors?.required
  }

  get email(){
    return this.addUser.get('email')
  }

  get password(){
    return this.addUser.get('password');
  }
  get confirmPassword(){
    return this.addUser.get('confirmPassword');
  }
  get id(){
    return this.addUser.get('id');
  }
  get  phoneNumber(){
    return this.addUser.get('phoneNumber');
  }
  get userId(){
    return this.addUser.get('userId');
  }
  get roleId(){
    return this.addUser.get('roleId');
  }
}
