import { Component, OnInit, Input } from '@angular/core';

import { I18nService } from './i18n.service';
import { NgbDropdown, NgbDropdownToggle, NgbDropdownMenu } from '@ng-bootstrap/ng-bootstrap';
import { NgClass } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
    selector: 'app-language-selector',
    templateUrl: './language-selector.component.html',
    styleUrls: ['./language-selector.component.scss'],
    imports: [
        NgbDropdown,
        NgClass,
        NgbDropdownToggle,
        NgbDropdownMenu,
        TranslatePipe,
    ],
})
export class LanguageSelectorComponent implements OnInit {
  @Input() inNavbar = false;
  @Input() menuClass = '';

  constructor(private i18nService: I18nService) {}

  ngOnInit() {}

  setLanguage(language: string) {
    this.i18nService.language = language;
  }

  get currentLanguage(): string {
    return this.i18nService.language;
  }

  get languages(): string[] {
    return this.i18nService.supportedLanguages;
  }
}
