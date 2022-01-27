import { Component, OnInit } from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {GamesService} from "../../../services/games.service";
import {DataService} from "../../../services/data.service";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {AddEditGameComponent} from "../../shared/add-edit-game/add-edit-game.component";
import {AddReviewComponent} from "../../shared/add-review/add-review.component";

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {

  public subscription: Subscription;
  public name: any;
  public idact: any;
  public reviews: any;
  public loggedUser: { username: string; password: string; };
  public rol = localStorage.getItem('Role');

  constructor(
    private route: ActivatedRoute,
    private gamesService: GamesService,
    private router: Router,
    private dataService: DataService,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.subscription = this.dataService.currentUser.subscribe(user => this.loggedUser = user);
    this.subscription = this.route.params.subscribe(params => {
      this.name = params['name'];
      if(this.name){
        this.getReviews();
      }
    });
  }

  ngOnDestroy(): void{
    this.subscription.unsubscribe();
  }
    public getReviews(){
        this.gamesService.getGameByName(this.name).subscribe(
          (res) => {
            console.log(res);
            this.idact = res.id;
              this.gamesService.getReviewsByid(res.id).subscribe(
                (res) => {this.reviews = res.texts; console.log(this.reviews);},
                (err) => {console.error(err);}
              );

          },
          (err) => {
            console.error(err);
          }
        );
    }


  public openModal(rev?: any): void{
    const data = {
      rev
    };
    const dialogConfig = new MatDialogConfig();
    dialogConfig.height = '40%';
    dialogConfig.width = '70%';
    dialogConfig.data = data;
    this.dataService.currentGame = this.idact;
    const dialogRef = this.dialog.open(AddReviewComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((res) => {
      if(res){
        console.log(res);
        this.getReviews();
      }
    });
  }

  public addNewRev(): void{
    this.openModal();
  }

  public logout(): void{
    localStorage.setItem('Role','User');
    this.router.navigate(['/login']);
  }

  public backToGames(): void{
    this.router.navigate(['/games']);
  }
}
