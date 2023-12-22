import { Component, OnInit } from '@angular/core';
import { TokenService } from './_core/service/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isShowPermission = false;
  constructor(
    private tokenService: TokenService
  ) { }
  ngOnInit(): void {
    if (this.tokenService.isTokenValid()) {
      const user = this.tokenService.getUser();
      if (user && user.includes('admin')) {
        this.isShowPermission = true;
      } else {
        this.isShowPermission = false
      }
    }
  }
}
