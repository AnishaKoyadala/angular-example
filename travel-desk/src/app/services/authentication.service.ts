import {Injectable} from '@angular/core';
import {ApiUrlService} from './apiUrl.service';
import {HttpService} from './http.service';

@Injectable()
export class AuthenticationService {
  constructor(
    private apiUrlService: ApiUrlService,
    private httpService: HttpService) {
  }

  authenticate(username, password) {
    let requestObj: {'email': string, 'password': string};
    requestObj = {'email': username, 'password': password};
    return this.httpService.serviceCall('POST', this.apiUrlService.getApiAuthUrl(), requestObj);
  }

}
