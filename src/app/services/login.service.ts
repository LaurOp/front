import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    public http: HttpClient,
  ) { }

  public url = 'https://localhost:5001/api/Authentication';

  public login(email: string, password: string){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(
      this.url + '/login',
      JSON.stringify({ email, password }), {headers});

  }






}


