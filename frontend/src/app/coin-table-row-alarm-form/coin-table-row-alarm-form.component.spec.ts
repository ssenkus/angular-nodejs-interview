import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinTableRowAlarmFormComponent } from './coin-table-row-alarm-form.component';

describe('CoinTableRowAlarmFormComponent', () => {
  let component: CoinTableRowAlarmFormComponent;
  let fixture: ComponentFixture<CoinTableRowAlarmFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoinTableRowAlarmFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinTableRowAlarmFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
