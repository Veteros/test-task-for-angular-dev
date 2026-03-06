/*
 * Entry point of the application.
 * Only platform bootstrapping code should be here.
 * For app-specific initialization, use `app/app.component.ts`.
 */

import { enableProdMode, importProvidersFrom } from '@angular/core';


import { environment } from '@env/environment';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from '@core';
import { ShellModule } from '@app/shell/shell.module';
import { HomeModule } from '@app/home/home.module';
import { AuthModule } from '@app/auth';
import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production }), FormsModule, TranslateModule.forRoot(), NgbModule, CoreModule, ShellModule, HomeModule, AuthModule, AppRoutingModule),
        provideHttpClient(withInterceptorsFromDi())
    ]
})
  .catch((err) => console.error(err));
