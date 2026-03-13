import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UntypedFormGroup, UntypedFormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { finalize } from 'rxjs/operators';

import { environment } from 'apps/my-app/src/environments/environment';
import { Logger } from '@my-org/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { AuthenticationService } from './authentication.service';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';
import { LanguageSelectorComponent } from '@my-org/shared-util-i18n';

const log = new Logger('Login');

@UntilDestroy()
@Component({
  selector:    'app-login',
  templateUrl: './login.component.html',
  styleUrls:   ['./login.component.scss'],
  imports:     [TranslateDirective, LanguageSelectorComponent, ReactiveFormsModule, TranslatePipe],
})
export class LoginComponent implements OnInit {
  version: string | null = environment.version;
  error: string | undefined;
  loginForm!: UntypedFormGroup;
  isLoading = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: UntypedFormBuilder,
    private authenticationService: AuthenticationService,
  ) {
    this.createForm();
  }

  ngOnInit() {}

  login() {
    this.isLoading = true;
    const login$ = this.authenticationService.login(this.loginForm.value);
    login$
      .pipe(
        finalize(() => {
          this.loginForm.markAsPristine();
          this.isLoading = false;
        }),
        untilDestroyed(this),
      )
      .subscribe({
        next: (credentials) => {
          log.debug(`${credentials.username} successfully logged in`);
          this.router.navigate([this.route.snapshot.queryParams['redirect'] || '/'], { replaceUrl: true });
        },
        error: (error) => {
          log.debug(`Login error: ${error}`);
          this.error = error;
        },
      });
  }

  private createForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      remember: true,
    });
  }
}
