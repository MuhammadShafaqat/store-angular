import { TestBed } from '@angular/core/testing';

import { FakeBackendInterceptorInterceptor } from './fake-backend-interceptor.interceptor';

describe('FakeBackendInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      FakeBackendInterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: FakeBackendInterceptorInterceptor = TestBed.inject(FakeBackendInterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
