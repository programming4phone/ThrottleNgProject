import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TierAdminComponent } from './tier-admin.component';

describe('TierAdminComponent', () => {
  let component: TierAdminComponent;
  let fixture: ComponentFixture<TierAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TierAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TierAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
