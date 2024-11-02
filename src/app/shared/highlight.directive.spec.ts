import {HighlightDirective} from './highlight.directive';
import {TestBed} from "@angular/core/testing";
import {ElementRef} from "@angular/core";

class MockElementRef extends ElementRef {
}

describe('HighlightDirective', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [HighlightDirective, {provide: ElementRef, useValue: MockElementRef}],
    }).compileComponents();
  });
  it('should create an instance', () => {
    const directive = TestBed.inject(HighlightDirective);
    expect(directive).toBeTruthy();
  });
});
