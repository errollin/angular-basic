import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseDateComponent } from './expense-date.component';

describe('ExpenseDateComponent', () => {
  let component: ExpenseDateComponent;
  let fixture: ComponentFixture<ExpenseDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpenseDateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpenseDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
