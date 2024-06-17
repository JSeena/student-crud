import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-student-form',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(
    private _dialogRef: MatDialogRef<HomeComponent>
  ) {}

  closeDialog() {
    this._dialogRef.close();
  }
}
