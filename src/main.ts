// /*
//  * Entry point of the application.
//  * Only platform bootstrapping code should be here.
//  * For app-specific initialization, use `app/app.component.ts`.
//  */
//
// import { enableProdMode, importProvidersFrom } from '@angular/core';
//
//
// import { environment } from '@env/environment';
// import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
// import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
// import { ServiceWorkerModule } from '@angular/service-worker';
// import { FormsModule } from '@angular/forms';
// import { TranslateModule } from '@ngx-translate/core';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { CoreModule } from '@core';
// import { ShellModule } from '@app/shell/shell.module';
// import { HomeModule } from '@app/home/home.module';
// import { AuthModule } from '@app/auth';
// // import { AppRoutingModule } from '@app/app-routing.module';
// import { routes } from './app/app.routes';
// import { AppComponent } from '@app/app.component';
//
// if (environment.production) {
//   enableProdMode();
// }
//
// bootstrapApplication(AppComponent, {
//     providers: [
//         importProvidersFrom(BrowserModule, ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production }), FormsModule, TranslateModule.forRoot(), NgbModule, CoreModule, ShellModule, HomeModule, AuthModule, routes),
//         provideHttpClient(withInterceptorsFromDi())
//     ]
// })
//   .catch((err) => console.error(err));

/*
 * Entry point of the application.
 * Only platform bootstrapping code should be here.
 * For app-specific initialization, use `app/app.component.ts`.
 */

import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { environment } from '@env/environment';
import { routes } from '@app/app.routes';
import { AppComponent } from '@app/app.component';

import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { RouteReuseStrategy } from '@angular/router';
import { apiPrefixInterceptor } from '@core/http/api-prefix.interceptor';
import { errorHandlerInterceptor } from '@core/http/error-handler.interceptor';
import { RouteReusableStrategy } from '@core/route-reusable-strategy';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(withInterceptors([apiPrefixInterceptor, errorHandlerInterceptor])),
    {
      provide: RouteReuseStrategy,
      useClass: RouteReusableStrategy,
    },
    importProvidersFrom(
      ServiceWorkerModule.register('./ngsw-worker.js', {
        enabled: environment.production,
      }),
      TranslateModule.forRoot(),
      NgbModule,
    ),
  ],
}).catch((err) => console.error(err));
