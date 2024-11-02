import {GlobalErrorHandler} from './global-error-handler';
import {TestBed} from "@angular/core/testing";
import {provideHttpClient} from "@angular/common/http";
import {NotificationService} from "./notification.service";
import {ErrorService} from "./error-service";
import {ConsoleErrorService} from "./console-error-service";

describe('GlobalErrorHandler', () => {
  let errorHandler: GlobalErrorHandler;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GlobalErrorHandler, provideHttpClient(), NotificationService, {
        provide: ErrorService, useClass: ConsoleErrorService
      }],
    });
    errorHandler = TestBed.inject(GlobalErrorHandler);
  });

  it('should create an instance', () => {
    expect(errorHandler).toBeTruthy();
  });
});
