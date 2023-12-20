import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
// import {
//   MatDialogActions,
//   MatDialogClose,
//   MatDialogContent,
//   MatDialogTitle,
// } from '@angular/material/dialog';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BoardUserComponent } from './layout/board-user/board-user.component';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PopupComponent } from './components/popup/popup.component';
import { LoginComponent } from './layout/login/login.component';
import { HomeComponent } from './layout/home/home.component';
// import { MyCustomPaginatorIntl } from './_heplers/panigator/paginator';

@NgModule({
  declarations: [
    AppComponent,
    BoardUserComponent,
    FormComponent,
    PopupComponent,
    LoginComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatTooltipModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatRadioModule,
    MatMenuModule,
    MatProgressBarModule,
    MatPaginatorModule,
    Ng2SearchPipeModule,
    // MatDialog,
    // MatDialogActions,
    // MatDialogClose,
    // MatDialogContent,
    // MatDialogTitle,
  ],
  providers: [
    {
      provide: MatPaginatorIntl,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
