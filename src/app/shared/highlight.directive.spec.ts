import {HighlightDirective} from './highlight.directive';
import {TestBed} from "@angular/core/testing";
import {ElementRef} from "@angular/core";

describe('HighlightDirective', () => {

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [HighlightDirective],
      providers: [ElementRef]
    })
  });
  it('should create an instance', () => {
    const directive = TestBed.inject(HighlightDirective);
    expect(directive).toBeTruthy();
  });
});
