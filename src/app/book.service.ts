import {Injectable} from '@angular/core';
import {Book} from "./book";
import {delay, map, Observable, of} from "rxjs";

@Injectable()
export class BookService {

  private readonly books: Book[];

  constructor() {
    this.books = [{
      id: 1,
      title: 'JavaScript: The Good Parts',
      year: 2008,
      author: 'Douglas Crockford',
      pages: 172,
      price: 1000,
      description: 'This authoritative book scrapes away these bad features to reveal a subset of JavaScript that\'s more reliable, readable, and maintainable'
    }, {
      id: 2,
      title: 'Mastering TypeScript',
      year: 2015,
      author: 'Nathan Rozentals',
      pages: 364,
      price: 1500,
      description: 'Build enterprise-ready, industrial strength web applications using TypeScript and leading JavaScript frameworks'
    }];
  }

  getBooks(): Observable<Book[]> {
    return of(this.books).pipe(delay(1000));
  }

  save(book: Book) {
    this.books.push(book);
  }

  bookExists(title: string): Observable<boolean> {
    return of(this.books).pipe(delay(100)).pipe(map(values => values.map(book => book.title)
      .includes(title)))
  }

  findBookById(id: number): Book | null {
    const idx = this.books.findIndex(book => book.id === Number(id));
    if (idx > -1) {
      return this.books[idx];
    }
    return null;
  }
}
