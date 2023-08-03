import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
  
@Injectable()

export class TokenInterceptor implements HttpInterceptor {
  constructor() { }

  intercept = (request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> => {
    const idToken = localStorage.getItem('idToken');
    if (request.urlWithParams.includes('X-Amz-Algorithm')) {
      return next.handle(request);
    }
    const cloned = request.clone({
      headers: request.headers.set('Authorization',
        `Bearer ${idToken}`
      )

    });

    return next.handle(cloned);
  };

}
  