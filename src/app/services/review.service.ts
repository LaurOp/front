import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  public url = 'https://localhost:5001/api/Review';
  constructor(
    public http: HttpClient,
  ) { }

  public createRev(rev: any): Observable<any> {
    console.log(rev);
    return this.http.post(`${this.url}/fromBody`, rev);
  }

}
