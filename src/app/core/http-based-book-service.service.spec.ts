import {TestBed} from '@angular/core/testing';

import {HttpBasedBookService} from './http-based-book.service';
import {provideHttpClient} from "@angular/common/http";
import {HttpTestingController, provideHttpClientTesting} from "@angular/common/http/testing";
import {Book} from "../book/book";

describe('HttpBasedBookService', () => {
  let service: HttpBasedBookService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()]
    });
    service = TestBed.inject(HttpBasedBookService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('service should return books', () => {
    const books: Book[] = [{
      id: 1, description: 'test', author: 'author', pages: 2000, price: 1000, title: 'Angular',
      year: 2024
    }];

    TestBed.runInInjectionContext(() => {
      const signal = service.getBooks();

      const req = httpMock.expectOne('http://localhost:3000/books');
      expect(req.request.method).toBe('GET');
      req.flush(books);

      const actual = signal();
      expect(actual.length).toBe(1);
      expect(actual).toEqual(books);
    });
  });
});
