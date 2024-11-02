import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BooksComponent} from './books.component';
import {BookService} from "../../core/book.service";
import {ScrollingModule} from "@angular/cdk/scrolling";

describe('BooksComponent', () => {
  let component: BooksComponent;
  let fixture: ComponentFixture<BooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BooksComponent],
      providers: [BookService],
      imports: [ScrollingModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(BooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
