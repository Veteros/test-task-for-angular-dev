import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '@env/environment';

/**
 * Prefixes all requests not starting with `http[s]` with `environment.serverUrl`.
 */
export const apiPrefixInterceptor: HttpInterceptorFn = (req, next) => {
  if (!/^(http|https):/i.test(req.url)) {
    const apiReq = req.clone({ url: environment.serverUrl + req.url });
    return next(apiReq);
  }
  return next(req);
};