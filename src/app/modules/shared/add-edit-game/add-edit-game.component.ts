import {Component, Inject, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup} from "@angular/forms";
import {GamesService} from "../../../services/games.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-add-edit-game',
  templateUrl: './add-edit-game.component.html',
  styleUrls: ['./add-edit-game.component.scss']
})
export class AddEditGameComponent implements OnInit {

  public gameForm: FormGroup = new FormGroup(
    {
      name: new FormControl(''),
      creator: new FormControl(''),
      price: new FormControl(0)
    }
  );
  public title;
  public endbut;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private gamesService: GamesService,
    public dialogRef: MatDialogRef<AddEditGameComponent>

  ) {


    console.log(this.data.game);
    if (this.data.game){
      this.title = 'Edit Game';
      this.endbut = 'Edit';
      this.gameForm.patchValue({name:this.data.game.gameName, creator:this.data.game.creatName, price: 0});
    }else{
      this.title = 'New Game';
      this.endbut = 'Add';
    }
  }

  get name(): AbstractControl{
    return <AbstractControl>this.gameForm.get('name');
  }
  get creator(): AbstractControl{
    return <AbstractControl>this.gameForm.get('creator');
  }
  get price(): AbstractControl{
    return <AbstractControl>this.gameForm.get('price');
  }

  ngOnInit(): void {
  }

  public createGame(): void{
    this.gamesService.createGame(this.gameForm.value).subscribe(
      (res) => {
        console.log(res);
        this.dialogRef.close(res);
      },
      (err) => {
        console.error(err);
      }
    );
  }

  public editGame(): void{
    this.gamesService.editGame(this.gameForm.value).subscribe(
      (res) => {
        console.log(res);
        this.dialogRef.close(res);
      },
      (err) => {
        console.error(err);
      }
    );;
  }

}
