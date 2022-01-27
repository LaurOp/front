import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {DataService} from "../../../services/data.service";
import {Observable, Subscription} from "rxjs";
import {GamesService} from "../../../services/games.service";
import {animate, state, style, transition, trigger} from '@angular/animations';
import {AddEditGameComponent} from "../../shared/add-edit-game/add-edit-game.component";
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';


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
  public displayedColumns = ['Game', 'Creator', 'Review', 'Edit', 'Delete'];
  public rol = localStorage.getItem('Role');
  expandedElement: {
    gameName: string;
    creatName: number;
  } | null;



  constructor(
    private router: Router,
    private dataService: DataService,
    private gamesService: GamesService,
    private dialog: MatDialog,
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

  public deleteGame(game : any): void{
    this.gamesService.deleteGame(game).subscribe(
      (res) => {
        console.log(res);
        this.games = res;
      },
      (err) => {
        console.error(err);
      }
    )
  }

  public editGame(game: any): void{
    this.openModal(game);
  }

  public openModal(game?: any): void{
    const data = {
      game
    };
    const dialogConfig = new MatDialogConfig();
    dialogConfig.height = '40%';
    dialogConfig.width = '40%';
    dialogConfig.data = data;
    const dialogRef = this.dialog.open(AddEditGameComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((res) => {
      if(res){
        this.games = res;
      }
    });
  }

  public addNewGame(): void{
    this.openModal();
  }

  public goToReviews(name: any): void{
    this.router.navigate(['/reviews',name]);
  }


}
