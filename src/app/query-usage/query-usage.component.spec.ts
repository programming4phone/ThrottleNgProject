import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryUsageComponent } from './query-usage.component';

describe('QueryUsageComponent', () => {
  let component: QueryUsageComponent;
  let fixture: ComponentFixture<QueryUsageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueryUsageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
