import {Injectable, Signal} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Book} from "../book/book";
import {toSignal} from "@angular/core/rxjs-interop";

@Injectable({
  providedIn: 'root'
})
export class HttpBasedBookServiceService {

  constructor(private http: HttpClient) {
  }

  getBooks(): Signal<Book[]> {
    //TODO catch errors
    return toSignal(this.http.get<Book[]>('http://localhost:3000/books'), {initialValue: []});
  }

  bookExists(title: string): Observable<boolean> {
    // return this.getBooks().pipe(map(values => values.map(book => book.title)
    //   .includes(title)))
    return of(false);
  }
}
