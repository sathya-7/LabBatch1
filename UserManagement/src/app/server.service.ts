import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from './add-user/add-user.component';
import { User } from './login-account/login-account.component';
import { register1} from './register-an-account/register-an-account.component';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  public registerUrl = "https://localhost:44316/api/auth/register";
  public loginUrl = "https://localhost:44316/api/auth/token";
  public getUrl=" https://localhost:44316/api/user/get";
  public postUrl = "https://localhost:44316/api/user/insertWithRole";
  public deleteUrl = "https://localhost:44316/api/user/delete/"
  constructor(private http: HttpClient) { }

  registerData(val:any) {
    return this.http.post(this.registerUrl, val)
  }

  loginData(data: User) {
    return this.http.post(this.loginUrl, data)
  }

  getToken(){
    return localStorage.getItem("token");
  }

  getData() : Observable<user[]>{
    return this.http.get<user[]>(this.getUrl)
  }

  loggedIn(){
    return !!localStorage.getItem("token")
  }

  postData(val:user) :Observable<user>{
    return this.http.post<user>(this.postUrl, val);
  }

  deleteData(id:any){
    return this.http.delete(`https://localhost:44316/api/user/delete/${id}`)
  }
  getDataById(id:any){
    return this.http.get(`https://localhost:44316/api/user/get/${id}`);
  }
}
