import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BookDetailsComponent} from './book-details.component';
import {Book} from "../book";
import {provideRouter, RouterModule} from "@angular/router";

describe('BookDetailsComponent', () => {
  let component: BookDetailsComponent;
  let fixture: ComponentFixture<BookDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookDetailsComponent],
      imports: [RouterModule],
      providers: [provideRouter([])]
    })
      .compileComponents();

    fixture = TestBed.createComponent(BookDetailsComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('book', new Book(1, 'title', 2020, 'author'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
