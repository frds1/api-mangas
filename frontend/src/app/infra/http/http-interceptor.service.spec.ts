import { TestBed } from '@angular/core/testing';
import { HttpInterceptorService } from './http-interceptor.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('HttpInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule]
  }));

  it('should be created', () => {
    const service: HttpInterceptorService = TestBed.get(HttpInterceptorService);
    expect(service).toBeTruthy();
  });
});
