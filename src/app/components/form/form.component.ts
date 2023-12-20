import { User } from './../../_heplers/interface/user';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from 'src/app/_service/common.service';
import { ActivatedRoute } from '@angular/router';
import { passwordValidator } from 'src/app/_heplers/validator/fomatPass.validator';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  isShowEdit = false;
  passwordHidden = true;
  constructor(
    private commonService: CommonService,
    private route: ActivatedRoute,
  ) { }

  userForm = new FormGroup({
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    dob: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, passwordValidator]),
    sex: new FormControl('', Validators.required),
    permission: new FormControl('', Validators.required),
  })

  idUser = this.route.snapshot.params['id'];

  ngOnInit(): void {
    this.commonService.getAllUser().subscribe((data: User[]) => {
      const foundUser = data.find(item => item.id == this.idUser);

      if (foundUser) {
        this.isShowEdit = true;
        this.userForm.patchValue({
          firstname: foundUser.firstname || '',
          lastname: foundUser.lastname || '',
          dob: foundUser.dob || '',
          email: foundUser.email || '',
          password: foundUser.password || '',
          sex: foundUser.sex || '',
          permission: foundUser.permission || '',
        });
      } else {
        console.log('Không có !!!');
      }
    });
  }

  handleSubmit() {
    if (this.userForm.valid) {
      this.commonService.createUser(this.userForm.getRawValue()).subscribe(e => {
        // console.log('done');
        Swal.fire({
          icon: "success",
          title: "Notification",
          text: "Created successfully",
          footer: '<a href="/dashboard">Return Dashboard</a>'
        });
      })
    } else {
      // console.log("error");
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Created Error!!!",
      });
    }
  }

  handleEdit(id: string) {
    if (this.userForm.valid) {
      this.commonService.editUser(id, this.userForm.getRawValue()).subscribe(e => {
        // console.log('done');
        Swal.fire({
          icon: "success",
          title: "Notification",
          text: "Edited successfully",
          footer: '<a href="/dashboard">Return Dashboard</a>'
        });
      })
    } else {
      // console.log('error');
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Edited Error!!!",
      });
    }
  }
  togglePasswordVisibility(): void {
    this.passwordHidden = !this.passwordHidden;
  }
}
