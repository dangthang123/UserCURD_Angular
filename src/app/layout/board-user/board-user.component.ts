import { Component, NgModule, OnInit } from '@angular/core';
import { CommonService } from '../../_core/service/common.service';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../../components/popup/popup.component';
import { TokenService } from 'src/app/_core/service/token.service';
import { PageEvent } from '@angular/material/paginator';


@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css'],
})
export class BoardUserComponent implements OnInit {
  displayedColumns: string[] = ['position', 'fistName', 'lastName', 'sex', 'dob', 'email', 'passWord', 'permission', 'actions'];
  dataSource: any[] = [];
  dataProfile: any;
  currentPageData: any[] = [];
  initialData: any[] = [];
  pageSize = 5;
  pageIndex = 0;


  constructor(
    private commonService: CommonService,
    public dialog: MatDialog,
    private authToken: TokenService,
  ) { }

  ngOnInit(): void {
    this.commonService.getAllUser().subscribe((e) => {
      this.dataSource = e
      this.currentPageData = e.slice(0, this.pageSize);
      this.initialData = [...this.dataSource];
    });
    this.retrieveUserProfile();
  }

  private retrieveUserProfile(): void {
    const token = this.authToken.getUser();
    if (token) {
      this.dataProfile = JSON.parse(token);
    }
  }
  onChangePaginator(event: PageEvent): void {
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;
    if (this.dataSource) {
      const currentPage = this.dataSource.slice(startIndex, endIndex);
      this.currentPageData = currentPage;
    }

  }
  isOpenPopup(id: string) {
    this.dialog.open(PopupComponent, {
      data: { id: id }
    });
  }

  handleOnUpdate(id: string): void {
    // console.log(id);
  }
  handleLogout() {
    this.authToken.signOut();
    window.location.reload();
  }
  search(event: Event): void {
    const target = event.target as HTMLInputElement;
    const keyword = target.value.toLowerCase();

    if (!keyword) {
      this.currentPageData = [...this.initialData];
    } else {
      this.currentPageData = this.initialData.filter((item: any) => {
        return (
          item.firstname.toLowerCase().includes(keyword) ||
          item.lastname.toLowerCase().includes(keyword) ||
          item.email.toLowerCase().includes(keyword)
        );
      });
    }
  }

}
