import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {DataService} from "../../../services/data.service";
import {Subscription} from "rxjs";
import {GamesService} from "../../../services/games.service";
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class GamesComponent implements OnInit, OnDestroy {

  public subscription: Subscription;
  public loggedUser: { username: string; password: string; };
  public parentMessage = 'Din parinte';
  public games = [];
  public displayedColumns = ['Game', 'Creator'];
  public rol = localStorage.getItem('Role');
  expandedElement: {
    gameName: string;
    creatName: number;
  } | null;



  constructor(
    private router: Router,
    private dataService: DataService,
    private gamesService: GamesService,
  ) { }

  ngOnInit(): void {
    this.subscription = this.dataService.currentUser.subscribe(user => this.loggedUser = user);

    this.gamesService.getAllGamesWithCreators().subscribe(
      (res) => {
        console.log(res);
        this.games = res;
      },
      (erro) => {
        console.error(erro);
      }
    );
  }


  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  public logout(): void{
    localStorage.setItem('Role','User');
    this.router.navigate(['/login']);
  }

  public receiveMessage(event: any): void{
    console.log(event);
  }

  public getrole(){
    return localStorage.getItem('Role');
  }

}
