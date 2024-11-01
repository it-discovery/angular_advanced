import {ChangeDetectionStrategy, Component} from '@angular/core';
import {BookService} from "../book.service";
import {Book} from "../book";
import {Observable} from "rxjs";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrl: './books.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BooksComponent {

  books$: Observable<Book[]>;

  constructor(private bookService: BookService) {
    this.books$ = this.bookService.getBooks();
  }

  saveBook(book: Book): void {
    this.bookService.save(book);
  }
}
