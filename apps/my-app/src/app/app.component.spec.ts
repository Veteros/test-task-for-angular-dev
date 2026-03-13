import { TestBed, waitForAsync } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { provideRouter } from '@angular/router';

import { CoreModule } from '@core';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot(), CoreModule],
      declarations: [AppComponent],
      providers: [provideRouter],
    }).compileComponents();
  }));

  it('should create the app', waitForAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }), 30000);
});
