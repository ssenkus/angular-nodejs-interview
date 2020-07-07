import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransformCoinDataComponent } from './transform-coin-data.component';

describe('TransformCoinDataComponent', () => {
  let component: TransformCoinDataComponent;
  let fixture: ComponentFixture<TransformCoinDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransformCoinDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransformCoinDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
