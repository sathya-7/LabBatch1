import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServerService } from '../server.service';

export type UserRole={
  id: String,
  name: String,
  normalizedName: String,
  concurrencyStamp: String
}

@Component({
  selector: 'app-user-role',
  templateUrl: './user-role.component.html',
  styleUrls: ['./user-role.component.scss']
})
export class UserRoleComponent implements OnInit {

  public getUserDetails: any;
  constructor(private service: ServerService,private router:Router,private route:ActivatedRoute) {
   
   }

  ngOnInit(): void {
    this.service.getData().subscribe(data => this.getUserDetails = data);  }

  

  logOut(){
    this.router.navigateByUrl('/login')
    return localStorage.clear();
  }



}
