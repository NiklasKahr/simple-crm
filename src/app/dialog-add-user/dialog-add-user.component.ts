import { Component, inject } from '@angular/core';
import { Firestore, collection, doc, getDoc, setDoc } from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent {
  user = new User();
  birthDate!: Date;
  private firestore: Firestore = inject(Firestore);
  docRef: any;
  docId: any;
  isLoading: boolean = false;

  constructor(public dialogRef: MatDialogRef<DialogAddUserComponent>) { }

  async saveUser() {
    this.isLoading = true;
    if (this.birthDate)
      this.user.birthDate = this.birthDate.getTime();

    this.docRef = doc(collection(this.firestore, 'users'));
    await setDoc(this.docRef, this.user.toJson()).then(async () => {
      // const docSnap = await getDoc(this.docRef);
      // if (docSnap.exists()) {
      //   console.log("Document data:", docSnap.data());
      // } else {
      //   console.log("No such document!");
      // }
      this.isLoading = false;
    });
    this.dialogRef.close();
  }
}