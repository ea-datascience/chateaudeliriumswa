import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthUIComponent } from './auth-ui.component';

describe('AuthUIComponent', () => {
  let component: AuthUIComponent;
  let fixture: ComponentFixture<AuthUIComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthUIComponent]
    });
    fixture = TestBed.createComponent(AuthUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
