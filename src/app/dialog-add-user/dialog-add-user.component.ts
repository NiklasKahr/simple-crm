import { Component, inject } from '@angular/core';
import { Firestore, collection, doc, getDoc, setDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
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
  games$!: Observable<any[]>;
  docRef: any;
  docId: any;
  isLoading: boolean = false;

  async saveUser() {
    this.isLoading = true;
    this.user.birthDate = this.birthDate.getTime();

    // Junus
    // this.firestore.collection('users').add(this.user).then((result) => {
    // console.log(result);
    // });

    // would work with docId, but would save all users to the same document 
    // this.docRef = doc(collection(this.firestore, 'users', 'OkXi2YW1F1KETWnRuC5I');

    this.docRef = doc(collection(this.firestore, 'users'));
    await setDoc(this.docRef, this.user.toJson()).then(async () => {
      const docSnap = await getDoc(this.docRef);
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
      } else {
        console.log("No such document!");
      }
      this.isLoading = false;
    });
  }
}