import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from './register-an-account/register-an-account.component';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
public postUrl="https://localhost:44316/api/auth/register";
  constructor(private http:HttpClient) { }

  storeData(val:user){
    return this.http.post(this.postUrl,val)
  }
}
