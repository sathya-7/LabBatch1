import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PasswordValidator } from 'src/app/register-an-account/password.validator';
import { UserRoleServerService } from '../user-role-server.service';

@Component({
  selector: 'app-add-user-role',
  templateUrl: './add-user-role.component.html',
  styleUrls: ['./add-user-role.component.scss']
})
export class AddUserRoleComponent implements OnInit {

  public addUser: FormGroup;
  public response: any;
  constructor(private service: UserRoleServerService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder) {


    this.addUser = this.formBuilder.group({
      userName: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      email: ["", [Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
      password: ["", [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{6,}')]],
      emailConfirmed: ['true'],
      id: ["", Validators.required],
      phoneNumber: [, [Validators.required, Validators.maxLength(10)]],
      roleId: ["", Validators.required],
      userId: ['', Validators.required],
      confirmPassword: ["", Validators.required],
    }, { validator: PasswordValidator })
  }

  ngOnInit(): void {
    console.log(this.addUser)
    const id = this.route.snapshot.paramMap.get('id');
    this.service.getDataById(id)
      .subscribe(
        res => {
          console.log(res)
          return this.addUser.patchValue(res)
        }
      )
  }

  sendData() {
    this.service.postData(this.addUser.value).subscribe();
  }
  // deleteData() {
  //   this.service.deleteData({this.addUser.value.id,this.addUser.value.roleId}).subscribe(
  //     res => console.log("success")
  //   )
  // }
  get userName() {
    // console.log(this.username)
    return this.addUser.get('userName')
  };
  get username() {
    // console.log(this.registoration.get('userName')?.errors?.minLength)
    return !this.addUser.get('userName')?.errors?.required
  }

  get email() {
    return this.addUser.get('email')
  }

  get password() {
    return this.addUser.get('password');
  }
  get confirmPassword() {
    return this.addUser.get('confirmPassword');
  }
  get id() {
    return this.addUser.get('id');
  }
  get phoneNumber() {
    return this.addUser.get('phoneNumber');
  }
  get userId() {
    return this.addUser.get('userId');
  }
  get roleId() {
    return this.addUser.get('roleId');
  }

  logOut() {
    this.router.navigateByUrl('/login')
    return localStorage.clear();
  }
}


