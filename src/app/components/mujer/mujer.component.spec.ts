import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MujerComponent } from './mujer.component';

describe('MujerComponent', () => {
  let component: MujerComponent;
  let fixture: ComponentFixture<MujerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MujerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MujerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
