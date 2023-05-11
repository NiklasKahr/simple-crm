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
  user: User = new User;
  data: any;

  constructor(private route: ActivatedRoute, public dialog: MatDialog) { }

  async ngOnInit() {
    this.route.params.subscribe((params) => {
      this.getUser(params['id']);
    });
  }

  getUser(docId: string) {
    const docRef = doc(collection(this.firestore, 'users'), docId);
    docData(docRef).subscribe((doc: any) => {
      this.user = new User(doc);
      this.data = {
        user: new User(this.user),
        docId: docId
      };
    });
  }

  editDetails() {
    this.dialog.open(DialogEditDetailsComponent, { data: this.data });
  }

  editAddress() {
    this.dialog.open(DialogEditAddressComponent, { data: this.data });
  }
}