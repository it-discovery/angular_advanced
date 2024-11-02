import {inject} from "@angular/core";
import {MatSnackBar} from "@angular/material/snack-bar";

export class NotificationService {

  snackBar = inject(MatSnackBar);

  showMessage(message: string, title: string): void {
    this.snackBar.open(message, title, {duration: 2000});
  }
}
