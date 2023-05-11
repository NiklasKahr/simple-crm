import { Component, Inject, inject } from '@angular/core';
import { User } from 'src/models/user.class';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Firestore, collection, doc, updateDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-dialog-edit-details',
  templateUrl: './dialog-edit-details.component.html',
  styleUrls: ['./dialog-edit-details.component.scss']
})
export class DialogEditDetailsComponent {
  private firestore: Firestore = inject(Firestore);
  user!: User;
  birthDate!: Date;
  isLoading: boolean = false;
  docId!: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<DialogEditDetailsComponent>) {
    this.user = data.user;
    this.birthDate = new Date(this.user.birthDate);
    this.docId = data.docId;
  }

  async updateUser() {
    this.isLoading = true;
    if (this.birthDate)
      this.user.birthDate = this.birthDate.getTime();
    const docRef = doc(collection(this.firestore, 'users'), this.docId);
    await updateDoc(docRef, this.user.toJson());
    this.isLoading = false;
    this.dialogRef.close();
  }
}
