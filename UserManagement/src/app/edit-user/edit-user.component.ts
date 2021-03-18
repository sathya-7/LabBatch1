import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
public data: any;
  constructor(private service:ServerService
    ,private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.service.getDataById(id)
    .subscribe(
      res => {
        console.log("success")
        return this.data = res},
      err => console.log("Failed")
    )
  }

}
