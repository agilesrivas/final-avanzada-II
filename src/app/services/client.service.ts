import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private uri : string = "https://utn-lubnan-api-1.herokuapp.com/api/";

  constructor(private http:HttpClient) { }

  delete(id:string):Promise<any>{
    return this.http.delete(`${this.uri}Client/${id}`).toPromise();
  }

  getAll() : Promise<any>{
   return this.http.get(`${this.uri}Client`).toPromise();
  }
}
