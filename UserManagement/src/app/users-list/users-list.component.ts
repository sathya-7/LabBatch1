import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { user } from '../add-user/add-user.component';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  public getUserDetails: any;
  constructor(private service: ServerService,private router:Router,private route:ActivatedRoute) {
   
   }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.service.getData().subscribe(data => this.getUserDetails = data);
  }

  
}
