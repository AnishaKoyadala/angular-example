import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Observable} from 'rxjs/Observable';
import {ApiResponse} from '../model/apiResponse.model';
import {ApiUrlService} from './apiUrl.service';
import {Router} from '@angular/router';


@Injectable()
export class HttpService {

  apiResponse: ApiResponse = new ApiResponse();

  constructor(
    private router: Router,
    private http: HttpClient,
    private apiUrlService: ApiUrlService) {
  }

  public handleError(err: HttpErrorResponse) {
    console.log(err);
    this.router.navigate(['auth']);
    return Observable.throw(err.error.message || 'Error Occurred While Fetching the data Or Api down');
  }
  serviceCall(methodType, apiUrl, requestBody): Observable<ApiResponse> {

    switch (methodType) {
      case 'GET':
        return this.http.get<any>(apiUrl).catch(this.handleError);
      case 'POST':
        return this.http.post<any>(apiUrl, requestBody).catch(this.handleError);
      case 'PUT':
        return this.http.put<any>(apiUrl, requestBody).catch(this.handleError);
      case 'DELETE':
        return this.http.delete<any>(apiUrl).catch(this.handleError);

    }


  }

  connectService(methodType, apiUrl, requestBody): ApiResponse {

    if (methodType === 'GET') {

      this.http.get<any>(apiUrl).catch(this.handleError).subscribe((resObj) => {
        if (resObj.statusCode === '200') {
          this.apiResponse = resObj;
          return this.apiResponse;
        }
      },
        err => {
          // Log errors if any
          // this.error = err;
        });
    }

    if (methodType === 'POST') {
      this.http.post<any>(apiUrl, requestBody).catch(this.handleError).subscribe((resobj) => this.apiResponse = resobj);
    }
    console.log('apiResponse : ' + this.apiResponse);
    return this.apiResponse;
  }


}
