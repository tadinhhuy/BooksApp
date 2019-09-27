import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseDefaultComponent } from './license-default.component';

describe('LicenseDefaultComponent', () => {
  let component: LicenseDefaultComponent;
  let fixture: ComponentFixture<LicenseDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LicenseDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LicenseDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
