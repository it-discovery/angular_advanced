import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BookService} from "./book.service";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {NotificationService} from "./notification.service";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSnackBarModule
  ],
  providers: [BookService, NotificationService]
})
export class CoreModule {
}
