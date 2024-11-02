import {ErrorHandler, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BookService} from "./book.service";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {NotificationService} from "./notification.service";
import {ConsoleErrorService} from "./console-error-service";
import {ErrorService} from "./error-service";
import {GlobalErrorHandler} from "./global-error-handler";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSnackBarModule
  ],
  providers: [{provide: BookService, useClass: BookService}, NotificationService, {
    provide: ErrorService, useClass: ConsoleErrorService
  }, {provide: ErrorHandler, useClass: GlobalErrorHandler}]
})
export class CoreModule {
}
