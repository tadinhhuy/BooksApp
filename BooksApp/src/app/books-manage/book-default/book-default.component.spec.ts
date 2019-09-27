import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDefaultComponent } from './book-default.component';

describe('BookDefaultComponent', () => {
  let component: BookDefaultComponent;
  let fixture: ComponentFixture<BookDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
