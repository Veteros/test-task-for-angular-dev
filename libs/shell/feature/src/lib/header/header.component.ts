import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

import { AuthenticationService } from '@my-org/auth-feature';
import { CredentialsService } from '@my-org/auth-feature';
import { TranslateDirective } from '@ngx-translate/core';
import { NgbCollapse, NgbDropdown, NgbDropdownToggle, NgbDropdownMenu } from '@ng-bootstrap/ng-bootstrap';
import { LanguageSelectorComponent } from '@my-org/shared-util-i18n';

@Component({
  selector:    'app-header',
  templateUrl: './header.component.html',
  styleUrls:   ['./header.component.scss'],
  imports:     [
    TranslateDirective,
    NgbCollapse,
    RouterLink,
    RouterLinkActive,
    LanguageSelectorComponent,
    NgbDropdown,
    NgbDropdownToggle,
    NgbDropdownMenu,
  ],
})
export class HeaderComponent implements OnInit {
  menuHidden = true;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private credentialsService: CredentialsService,
  ) {}

  ngOnInit() {}

  toggleMenu() {
    this.menuHidden = !this.menuHidden;
  }

  logout() {
    this.authenticationService.logout().subscribe(() => this.router.navigate(['/login'], { replaceUrl: true }));
  }

  get username(): string | null {
    const credentials = this.credentialsService.credentials;
    return credentials ? credentials.username : null;
  }
}
