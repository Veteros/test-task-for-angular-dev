import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { provideRouter } from '@angular/router';

import { AuthenticationService } from '@my-org/auth-feature';
import { CredentialsService } from '@my-org/auth-feature';
import { MockAuthenticationService } from '@my-org/auth-feature';
import { MockCredentialsService } from '@my-org/auth-feature';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [NgbModule, TranslateModule.forRoot()],
      declarations: [HeaderComponent],
      providers: [
        { provide: AuthenticationService, useClass: MockAuthenticationService },
        { provide: CredentialsService, useClass: MockCredentialsService },
        provideRouter,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
