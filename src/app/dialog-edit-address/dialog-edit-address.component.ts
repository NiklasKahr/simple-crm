import { Component, Inject, inject } from '@angular/core';
import { User } from 'src/models/user.class';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Firestore, collection, doc, updateDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-dialog-edit-address',
  templateUrl: './dialog-edit-address.component.html',
  styleUrls: ['./dialog-edit-address.component.scss']
})
export class DialogEditAddressComponent {
  private firestore: Firestore = inject(Firestore);
  user!: User;
  isLoading: boolean = false;
  docId!: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<DialogEditAddressComponent>) {
    this.user = data.user;
    this.docId = data.docId;
  }

  async updateUser() {
    this.isLoading = true;
    const docRef = doc(collection(this.firestore, 'users'), this.docId);
    await updateDoc(docRef, this.user.toJson());
    this.isLoading = false;
    this.dialogRef.close();
  }
}