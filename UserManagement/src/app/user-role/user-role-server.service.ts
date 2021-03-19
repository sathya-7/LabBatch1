import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserRole } from './user-role.component';

@Injectable({
  providedIn: 'root'
})
export class UserRoleServerService {

  public userRolePostUrl = "https://localhost:44316/api/userRoles/add";
  public userRoleDeleteUrl = ""

  constructor(private http:HttpClient) { }

  getUserRole(id : any) {
    return this.http.get(`https://localhost:44316/api/userRoles/get/${id}`);
  }

  postData(val:any){
    return this.http.post(this.userRolePostUrl,val)
  }

  deleteData(id:any,roleId:any){
 return this.http.delete(`https://localhost:44316/api/userRoles/delete/${id}/${roleId}`)
  }

  getDataById(id:any){
    return this.http.get(`https://localhost:44316/api/user/get/${id}`);
  }
}
