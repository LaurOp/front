import { Component, OnInit } from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {GamesService} from "../../../services/games.service";

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


  constructor(
    private route: ActivatedRoute,
    private gamesService: GamesService
  ) { }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(params => {
      this.name = params['name'];
      if(this.name){
        this.getReviews();
      }
    });
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


}
