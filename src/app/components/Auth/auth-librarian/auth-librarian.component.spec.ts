import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthLibrarianComponent } from './auth-librarian.component';

describe('AuthLibrarianComponent', () => {
  let component: AuthLibrarianComponent;
  let fixture: ComponentFixture<AuthLibrarianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthLibrarianComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthLibrarianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
