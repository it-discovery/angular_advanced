import {TestBed} from '@angular/core/testing';

import {HttpBasedBookServiceService} from './http-based-book-service.service';
import {provideHttpClient} from "@angular/common/http";

describe('HttpBasedBookServiceService', () => {
  let service: HttpBasedBookServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()]
    });
    service = TestBed.inject(HttpBasedBookServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
