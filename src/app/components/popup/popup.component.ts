import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonService } from 'src/app/_service/common.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private commonService: CommonService,

  ) { }

  ngOnInit(): void {
    console.log(this.data.id);
  }

  handleOnDelete(): void {
    if (this.data.id) {
      this.commonService.deleteUser(this.data.id).subscribe(e => {
        // console.log('done');
        Swal.fire({
          title: "Notification",
          text: "Deleted Successfully",
          icon: "success",
        });
        window.location.reload();
      })
    } else {
      // console.log("Lỗiii");
    }

  }
}
