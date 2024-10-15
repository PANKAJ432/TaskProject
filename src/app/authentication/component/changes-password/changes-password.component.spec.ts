import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangesPasswordComponent } from './changes-password.component';

describe('ChangesPasswordComponent', () => {
  let component: ChangesPasswordComponent;
  let fixture: ComponentFixture<ChangesPasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChangesPasswordComponent]
    });
    fixture = TestBed.createComponent(ChangesPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
