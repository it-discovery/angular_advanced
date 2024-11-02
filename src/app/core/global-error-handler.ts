import {ErrorHandler, inject} from "@angular/core";
import {HttpErrorResponse} from "@angular/common/http";
import {NotificationService} from "./notification.service";
import {ErrorService} from "./error-service";

export class GlobalErrorHandler implements ErrorHandler {

  notificationService = inject(NotificationService);

  errorService = inject(ErrorService);

  handleError(error: Error | HttpErrorResponse): void {
    const message: string = error.message;
    let description: string;
    if (error instanceof HttpErrorResponse) {
      description = 'Server url: ' + error.url + ', status: ' + error.statusText;
    } else {
      description = error.stack ? error.stack : '';
    }
    this.errorService.reportMessage(message, description);
    this.notificationService.showMessage(message);
  }
}
