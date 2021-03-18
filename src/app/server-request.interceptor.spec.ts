import { TestBed } from '@angular/core/testing';

import { ServerRequestInterceptor } from './server-request.interceptor';

describe('ServerRequestInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ServerRequestInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ServerRequestInterceptor = TestBed.inject(ServerRequestInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
