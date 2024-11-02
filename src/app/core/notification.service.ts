import {inject} from "@angular/core";
import {MatSnackBar} from "@angular/material/snack-bar";

export class NotificationService {

  //FIXME move to settings
  private readonly title = 'Book shop';

  snackBar = inject(MatSnackBar);

  showMessage(message: string): void {
    this.snackBar.open(message, this.title, {duration: 2000});
  }
}
