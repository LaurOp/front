import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() { }

  private userSource = new BehaviorSubject({
    username: '',
    password: ''
  });

 public currentUser = this.userSource.asObservable();
  public currentGame = 0;
  public changeUserData(user: { username: string; password: string; }): void{
    this.userSource.next(user);
  }
}
