import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CoreModule } from '@core';
import { AuthenticationService, CredentialsService } from '@app/auth';
import { MockAuthenticationService } from '@app/auth/authentication.service.mock';
import { MockCredentialsService } from '@app/auth/credentials.service.mock';

import { ShellComponent } from './shell.component';
import { HeaderComponent } from './header/header.component';

describe('ShellComponent', () => {
  let component: ShellComponent;
  let fixture: ComponentFixture<ShellComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot(), NgbModule, CoreModule],
      providers: [
        { provide: AuthenticationService, useClass: MockAuthenticationService },
        { provide: CredentialsService, useClass: MockCredentialsService },
        provideRouter
      ],
      declarations: [HeaderComponent, ShellComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
