import {Injectable, Inject, forwardRef} from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http';
import {TokenService} from './token.service';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private router: Router, private tokenService: TokenService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {


    if (this.tokenService.isAuthenticated()) {

      if (!request.headers.has('access-key')) {
        request = request.clone({headers: request.headers.set('access-key', this.tokenService.getAccessKeyToken())});
      }
      if (!request.headers.has('user-key')) {
        request = request.clone({headers: request.headers.set('user-key', this.tokenService.getUserKeyToken())});
      }
    }
    if (!request.headers.has('Content-Type')) {
      request = request.clone({headers: request.headers.set('Content-Type', 'application/json')});
    }
    request = request.clone({headers: request.headers.set('Accept', 'application/json')});

    return next.handle(request);
  }

}
