import {ErrorService} from "./error-service";

export class ConsoleErrorService implements ErrorService {
  reportMessage(message: string, description: string): void {
    console.log('Error, message: ' + message + ', description: ' + description);
  }
}
