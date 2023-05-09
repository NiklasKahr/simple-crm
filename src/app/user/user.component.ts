import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  user = new User();

  constructor(public dialog: MatDialog) { }


  openDialog(): void {
    this.dialog.open(DialogAddUserComponent);
    // const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
    //   data: {name: this.name, animal: this.animal},
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   this.animal = result;
    // });
  }
}
