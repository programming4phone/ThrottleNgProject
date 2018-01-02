import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeUsageComponent } from './change-usage.component';

describe('ChangeUsageComponent', () => {
  let component: ChangeUsageComponent;
  let fixture: ComponentFixture<ChangeUsageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeUsageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
