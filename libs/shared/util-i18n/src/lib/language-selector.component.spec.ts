import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { I18nService } from './i18n.service';
import { LanguageSelectorComponent } from '@my-org/shared-util-i18n';

describe('LanguageSelectorComponent', () => {
  let component: LanguageSelectorComponent;
  let fixture: ComponentFixture<LanguageSelectorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      declarations: [LanguageSelectorComponent],
      providers: [I18nService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
