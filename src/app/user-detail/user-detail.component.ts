import { Component, OnInit, inject } from '@angular/core';
import { Firestore, collection, doc, docData } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/models/user.class';
import { DialogEditAddressComponent } from '../dialog-edit-address/dialog-edit-address.component';
import { DialogEditDetailsComponent } from '../dialog-edit-details/dialog-edit-details.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  private firestore: Firestore = inject(Firestore);
  stuff: any;
  user: User = new User;

  constructor(private route: ActivatedRoute, public dialog: MatDialog) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      console.log('params.id: ' + params['id']);
      this.getUser(params['id']);
    });
  }

  getUser(docId: string) {
    const docRef = doc(collection(this.firestore, 'users'), docId);
    docData(docRef).subscribe((doc: any) => {
      this.user = new User(doc);
    });
  }

  editDetails() {
    this.dialog.open(DialogEditDetailsComponent).componentInstance.user = JSON.parse(JSON.stringify(this.user));
  }

  editAddress() {
    this.dialog.open(DialogEditAddressComponent).componentInstance.user = JSON.parse(JSON.stringify(this.user));
  }

  /*
  async updateUser () {
    console.log(this.user);
    console.log(this.user.toJson());
    await updateDoc(this.docRef, this.game.toJson());
  }
  */
}