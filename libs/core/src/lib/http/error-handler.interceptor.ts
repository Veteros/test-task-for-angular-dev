import { HttpInterceptorFn } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { environment } from 'apps/my-app/src/environments/environment';
import { Logger } from '@my-org/core';

const log = new Logger('ErrorHandlerInterceptor');

/**
 * Adds a default error handler to all requests.
 */
export const errorHandlerInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error) => {
      if (!environment.production) {
        log.error('Request error', error);
      }
      throw error;
    }),
  );
};
