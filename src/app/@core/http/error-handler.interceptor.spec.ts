import { TestBed } from '@angular/core/testing';
import { HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { errorHandlerInterceptor } from '@core/http/error-handler.interceptor';
import { Logger } from '@core/logger.service';

describe('ErrorHandlerInterceptor', () => {
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(withInterceptors([errorHandlerInterceptor])),
        provideHttpClientTesting(),
      ],
    });

    httpClient = TestBed.inject(HttpClient);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should catch error and call error handler', () => {
    // Arrange
    // Note: here we spy on private method since target is customization here,
    // but you should replace it by actual behavior in your app
    const loggerSpy = spyOn(Logger.prototype, 'error');

    // Act
    httpClient.get('/test-error').subscribe({
      next: () => fail('should have failed with 404'),
      error: () => {
        expect(loggerSpy).toHaveBeenCalled();
      }
    });

    const req = httpMock.expectOne('/test-error');
    req.flush('Error', { status: 404, statusText: 'Not Found' });
  });
});
