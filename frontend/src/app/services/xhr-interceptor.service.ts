import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';


//Adds X-Requested-With XMLHttpRequest to header
//It prevent browser from asking user for credencials in case of getting unathorised response
@Injectable({
  providedIn: 'root'
})
export class XhrInterceptorService implements HttpInterceptor  {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log('XhrInterceptorService called');
    const xhr = req.clone({
      headers: req.headers.set('X-Requested-With', 'XMLHttpRequest')
    });
    return next.handle(xhr);
  }
}
