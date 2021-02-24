import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private uri : string = "https://utn-lubnan-api-1.herokuapp.com/api/";
  constructor(private http:HttpClient) { }

  login(user:User): Promise<any>{
    return this.http.post(`${this.uri}User/Login`,user).toPromise();
  }
}
