import {HttpErrorService} from './http-error-service';
import {TestBed} from "@angular/core/testing";
import {provideHttpClient} from "@angular/common/http";

describe('HttpErrorService', () => {

  let service: HttpErrorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpErrorService, provideHttpClient()],
    });
    service = TestBed.inject(HttpErrorService);
  });
  it('should create an instance', () => {
    expect(service).toBeTruthy();
  });
});
