import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-changes-password',
  templateUrl: './changes-password.component.html',
  styleUrls: ['./changes-password.component.scss']
})
export class ChangesPasswordComponent {

  constructor(public dialogRef: MatDialogRef<ChangesPasswordComponent>){}
}
