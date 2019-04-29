import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpXsrfTokenExtractor } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthHtppInterceptorService implements HttpInterceptor{

  constructor(private tokenExtractor: HttpXsrfTokenExtractor) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    // if (sessionStorage.getItem('username') && sessionStorage.getItem('basicauth')) {
    //   req = req.clone({
    //     setHeaders: {
    //       Authorization: sessionStorage.getItem('basicauth')
    //     }
    //   })
    // }
    let requestMethod: string = req.method;
    requestMethod = requestMethod.toLowerCase();
    if (requestMethod && (requestMethod === 'post' || requestMethod === 'delete' || requestMethod === 'put' )) {
      const headerName = 'X-XSRF-TOKEN';
      let token = this.tokenExtractor.getToken() as string;
      console.log(token);
      if (token !== null && !req.headers.has(headerName)) {
        req = req.clone({ headers: req.headers.set(headerName, token) });
      }
   }

    return next.handle(req);

  }
}
