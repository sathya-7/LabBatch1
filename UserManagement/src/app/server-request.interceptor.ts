import { Injectable,Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServerService } from './server.service';

@Injectable()
export class ServerRequestInterceptor implements HttpInterceptor {

  constructor(private injector:Injector) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let authService = this.injector.get(ServerService)
    const authReq = req.clone({
     setHeaders:{Authorization: `Bearer ${authService.getToken()}`}
    
    // setHeaders:{
    //   Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJzYXRoaXlhcmFqQGV4YW1wbGUuY29tIiwianRpIjoiZGYzM2E2NzItNjJlMC00NWM5LWJlOTEtNDFkYmY3YTJlMjc0IiwiZW1haWwiOiJzYXRoaXlhcmFqQGV4YW1wbGUuY29tIiwidWlkIjoiMWQ3N2FkZDEtMTQzOC00NDlmLTgyOWUtNTFiN2ZkZTdkMjUwIiwiaXAiOiIxOTIuMTY4LjQzLjIzMSIsImV4cCI6MTYxNTg3NjAzMywiaXNzIjoiQXV0aFNlcnZlciIsImF1ZCI6IkF1dGhTZXJ2ZXJVc2VyIn0.1c6qa8lV6kzqCwUGYUrKGl7gTlUzBA4mYYRyu5A3uK8"},
    });
    return next.handle(authReq);
  }
}
