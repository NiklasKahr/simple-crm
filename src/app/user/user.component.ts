import { Component, OnInit, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { User } from 'src/models/user.class';
import { Observable } from 'rxjs';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user = new User();
  private firestore: Firestore = inject(Firestore);
  user$!: Observable<any[]>;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    const userCollection = collection(this.firestore, 'users');
    this.user$ = collectionData(userCollection, { idField: 'id' });
    collectionData(userCollection, { idField: 'id' }).subscribe((docs: any) => {

      docs.forEach((doc: any) => {
        console.log(doc.id);
      });

      // find a specific user and log its id
      // const specificUser = docs.find((doc: any) => doc.email === 'niklaskahr01@gmail.com');
      // if (specificUser) {
      //   console.log(specificUser.id);
      // }
    });
  }

  /*
    this.docRef = doc(collection(this.firestore, 'games'), this.docId);
      docData(this.docRef, { idField: 'id' }).subscribe((doc: any) => {
        this.game.currentPlayer = doc.currentPlayer;
        this.game.placedCards = doc.placedCards ?? [];
        this.game.players = doc.players;
        this.game.images = doc.images;
        this.game.stack = doc.stack;
        this.game.currentCard = doc.currentCard;
        this.game.hasPickCardAnimation = doc.hasPickCardAnimation;
      });


      let game = new Game();
      addDoc(this.gameDb, game.toJson()).then((gameInfo) => {
      this.router.navigateByUrl('/game/' + gameInfo.id);
    });
  */

  openDialog(): void {
    this.dialog.open(DialogAddUserComponent);
  }
}