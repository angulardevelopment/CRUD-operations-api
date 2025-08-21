import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndianFlagComponent } from './indian-flag.component';

describe('IndianFlagComponent', () => {
  let component: IndianFlagComponent;
  let fixture: ComponentFixture<IndianFlagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndianFlagComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndianFlagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
