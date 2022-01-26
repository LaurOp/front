import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  public url = 'https://localhost:5001/api/Game/withCreators';

  constructor(
    public http: HttpClient,
  ) {  }

  public getAllGamesWithCreators(): Observable<any> {
    return this.http.get(`${this.url}`);
  }


}
