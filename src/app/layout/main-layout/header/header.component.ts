import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ChangesPasswordComponent } from 'src/app/authentication/component/changes-password/changes-password.component';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  userName: any = ''
  constructor(private authservice: AuthService, private router: Router,    public dialog: MatDialog,) {
    this.userName = sessionStorage.getItem('userName');
  }


  // log out user and clear session storage
  logOut() {
    this.authservice.removeToken();
    this.router.navigateByUrl('/login');

  }
  onChangePasswordClick() {
    this.dialog.open(ChangesPasswordComponent, {
      width: '400px',
    });
  }
}
