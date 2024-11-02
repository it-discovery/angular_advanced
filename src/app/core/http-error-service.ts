import {ErrorService} from "./error-service";
import {inject} from "@angular/core";
import {HttpClient} from "@angular/common/http";

export class HttpErrorService implements ErrorService {

  http = inject(HttpClient)

  reportMessage(message: string, description: string): void {
    this.http.post('http://localhost:3000/log', {message: message, description: description});
  }
}
