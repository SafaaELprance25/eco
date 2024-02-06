import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContacutComponent } from './contacut.component';

describe('ContacutComponent', () => {
  let component: ContacutComponent;
  let fixture: ComponentFixture<ContacutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContacutComponent]
    });
    fixture = TestBed.createComponent(ContacutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
