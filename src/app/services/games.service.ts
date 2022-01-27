import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  public url = 'https://localhost:5001/api/Game/withCreators';
  public url2 = 'https://localhost:5001/api/Game';
  public url3 = 'https://localhost:5001/api/Review/grouped';

  constructor(
    public http: HttpClient,
  ) {  }

  public getAllGamesWithCreators(): Observable<any> {
    return this.http.get(`${this.url}`);
  }

  public deleteGame(game : any): Observable<any>{
    const options = {
      headers: new HttpHeaders(),
      body: {"name": game.gameName}
    };

    return this.http.delete(`${this.url2}`, options);
  }

  public createGame(game: any): Observable<any> {
    return this.http.post(`${this.url2}/fromBody`, game);
  }

  public editGame(game: any): Observable<any> {
    return this.http.put(`${this.url2}`, game);
  }

  public getGameByName(name: any): Observable<any>{
    return this.http.get(`${this.url2}/+${name}`);
  }

  public getReviewsByid(idd: any): Observable<any>{
    return this.http.get(`${this.url3}/${idd}`);
  }

}


