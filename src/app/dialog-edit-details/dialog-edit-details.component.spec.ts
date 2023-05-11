import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DialogEditDetailsComponent } from './dialog-edit-details.component';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';

describe('DialogEditDetailsComponent', () => {
  let component: DialogEditDetailsComponent;
  let fixture: ComponentFixture<DialogEditDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([]), MatDialogModule],
      declarations: [DialogEditDetailsComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(DialogEditDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
