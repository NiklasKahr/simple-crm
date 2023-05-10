import { Component } from '@angular/core';
import { User } from 'src/models/user.class';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-edit-details',
  templateUrl: './dialog-edit-details.component.html',
  styleUrls: ['./dialog-edit-details.component.scss']
})
export class DialogEditDetailsComponent {
  user!: User;
  birthDate!: Date;
  isLoading: boolean = false;

  constructor(public dialogRef: MatDialogRef<DialogEditDetailsComponent>) { }

  updateDetails() {
    if (this.birthDate)
      this.user.birthDate = this.birthDate.getTime();
  }
}
