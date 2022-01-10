import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    if (token) {

      req = req.clone({
        headers: req.headers
          .set('Access-Control-Allow-Origin', '*')
          .set('Access-Control-Allow-Headers', 'Content-Type, Accept, Authorization, X-Requested-With')
          .set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE')
          .set('X-Requested-With', 'XMLHttpRequest')
          // .set('Content-Type','application/json')
          .set('Authorization', 'Bearer ' + token)
      });
      return next.handle(req);
    } else {
      req = req.clone({
        headers: req.headers
          .set('Access-Control-Allow-Origin', '*')
          // .set('Content-Type','application/json')
          .set('Access-Control-Allow-Headers', 'Content-Type, Accept, Authorization, X-Requested-With')
          .set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE')
          .set('X-Requested-With', 'XMLHttpRequest')
      });
      console.log(req);
      return next.handle(req);
    }

  }
}
