import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BookComponent} from './book.component';
import {SharedModule} from "../shared/shared.module";
import {HighlightDirective} from "../shared/highlight.directive";
import {FormsModule} from "@angular/forms";

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookComponent],
      imports: [SharedModule, HighlightDirective, FormsModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
