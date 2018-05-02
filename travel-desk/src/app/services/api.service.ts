import {ApiResponse} from '../model/apiResponse.model';
import {Injectable} from '@angular/core';
import {ApiUrlService} from './apiUrl.service';
import {HttpService} from './http.service';


@Injectable()

export class ApiService {
  constructor(
    private apiUrlService: ApiUrlService,
    private httpService: HttpService) {
  }
  
 
  load(apiUri: string,queryParamName: string, queryParamValue: string, pathParam: string) {
    //return this.httpService.serviceCall('GET', this.apiUrlService.prepareApiCall(apiUri,queryParamName, queryParamValue, pathParam), null);
  return this.httpService.serviceCall('GET', this.apiUrlService.getTestLocal(apiUri,queryParamName, queryParamValue, pathParam), null);
  }
  
  saveOrUpdate(methodType: string,apiUri: string, requestObj: any, queryParamName: string, queryParamValue: string, pathParam: string) {
    //return this.httpService.serviceCall(methodType, this.apiUrlService.getTestLocal(apiUri,queryParamName, queryParamValue, pathParam), requestObj);
  return this.httpService.serviceCall('GET', this.apiUrlService.getTestLocal(apiUri,queryParamName, queryParamValue, pathParam), null);
  }
  


}
