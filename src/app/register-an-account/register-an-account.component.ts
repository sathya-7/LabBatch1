import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';

export type user={
  username:string;
  email:any;
  password:any;
  confirmPassword:any;
}



@Component({
  selector: 'app-register-an-account',
  templateUrl: './register-an-account.component.html',
  styleUrls: ['./register-an-account.component.css']
})
export class RegisterAnAccountComponent implements OnInit {
 public User:user = {username:"",email:"",password:"",confirmPassword:""};
//  public response: any;
  constructor(private service:ServerService) { }

  ngOnInit(): void {
  }
sendData(){
this.service.storeData(this.User).subscribe
}
}
