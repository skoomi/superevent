import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpXsrfTokenExtractor } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthHtppInterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log('BasicAuthHtppInterceptorService called');

    // if (sessionStorage.getItem('username') && sessionStorage.getItem('basicauth')) {
    //   req = req.clone({
    //     setHeaders: {
    //       Authorization: sessionStorage.getItem('basicauth')
    //     }
    //   })
    // }

    return next.handle(req);

  }
}
