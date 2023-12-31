import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from 'src/app/_core/service/common.service';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/_core/service/token.service';
import Swal from 'sweetalert2';
// import 'sweetalert2/src/sweetalert2.scss'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  dataSource: any;
  passwordHidden = true;
  isShowContentLogin = false;
  constructor(
    private commonService: CommonService,
    private router: Router,
    private tokenService: TokenService,
  ) { }
  loginForm = new FormGroup({
    emailLogin: new FormControl('', Validators.required),
    passwordLogin: new FormControl('', Validators.required),
  })
  ngOnInit(): void {
    this.commonService.getAllUser().subscribe((e) => {
      this.dataSource = e
    });

    if (this.tokenService.isTokenValid()) {
      this.isShowContentLogin = true;
    } else {
      this.isShowContentLogin = false;
    }

  }
  handleLogin(): void {
    const { emailLogin, passwordLogin } = this.loginForm.value;
    const foundUser = this.dataSource.find(
      (user: any) => user.email === emailLogin && user.password === passwordLogin
    );

    if (foundUser) {
      // console.log('Login successful');
      const userToSave = {
        id: foundUser.id,
        firstname: foundUser.firstname,
        lastname: foundUser.lastname,
        dob: foundUser.dob,
        permission: foundUser.permission,
        sex: foundUser.sex,
        email: foundUser.email,
        token: foundUser.token,
      };
      this.tokenService.saveUser(userToSave)
      this.tokenService.saveToken(foundUser.token);
      this.router.navigate(['/dashboard']);
      Swal.fire({
        title: "Notification",
        text: "Login successful",
        icon: "success"
      });
    } else {
      // console.log('Invalid credentials');
      Swal.fire({
        title: "Notification",
        text: "Invalid credentials",
        icon: "error"
      });

    }
  }
  togglePasswordVisibility(): void {
    this.passwordHidden = !this.passwordHidden;
  }

}
