import {Component, Inject, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {GamesService} from "../../../services/games.service";
import {ReviewService} from "../../../services/review.service";
import {DataService} from "../../../services/data.service";

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.scss']
})
export class AddReviewComponent implements OnInit {

  public revForm: FormGroup = new FormGroup(
    {
      text: new FormControl(''),
    }
  );

  public idactual: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private gamesService: GamesService,
    private reviewsService: ReviewService,
    public dialogRef: MatDialogRef<AddReviewComponent>,
    private dataService: DataService,
  ) { }

  get text(): AbstractControl{
    return <AbstractControl>this.revForm.get('text');
  }

  ngOnInit(): void {
    this.idactual = this.dataService.currentGame;
  }

  public addRev(): void{
    this.reviewsService.createRev({text:this.revForm.value.text,id:this.idactual}).subscribe(
      (res) => {
        this.dialogRef.close(res);
      },
      (err) => {
        console.error(err);
      }
    );
  }
}
