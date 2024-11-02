export abstract class ErrorService {

  abstract reportMessage(message: string, description: string): void;
}
