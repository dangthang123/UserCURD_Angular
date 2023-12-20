import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { TokenService } from 'src/app/_service/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isShowDashboard = false;
  constructor(
    public dialog: MatDialog,
    private tokenService: TokenService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isShowDashboard = true;
    } else {
      this.isShowDashboard = false;
    }
  }
  openDialog() {
    this.dialog.open(LoginComponent);
  }
  openDashboard() {
    this.router.navigate(['/dashboard']);
  }
}
