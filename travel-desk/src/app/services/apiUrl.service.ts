import {Injectable} from '@angular/core';

@Injectable()
export class ApiUrlService {
  private baseURL = 'http://localhost:8070/api-master/';
  private apiVersion = '?apiVersion=v1';
  constructor() {
  }
  public getApiAuthUrl(): string {
    return this.baseURL + 'authentication/login' + this.apiVersion;
  }
  

  public prepareApiCall(apiUri: string,queryParamName: string, queryParamValue: string, pathParam: string): string {
    return this.baseURL + apiUri + this.appendPathParamId(pathParam) + this.apiVersion + this.appendQueryParamId(queryParamName, queryParamValue);
  }
  
  public getTestLocal(apiUri: string,queryParamName: string, queryParamValue: string, pathParam: string): string {
    return apiUri + this.appendPathParamId(pathParam) + this.apiVersion + this.appendQueryParamId(queryParamName, queryParamValue);
  }

  

  private appendQueryParamId(queryParamName: string, queryParamValue: string): string {
    if (queryParamName !== null && queryParamName !== '' && queryParamName !== '0' && queryParamValue !== null && queryParamValue !== '' && queryParamValue !== '0') {
      return '&' + queryParamName + '=' + queryParamValue;
    } else {
      return '';
    }

  }
  private appendPathParamId(pathParam: string): string {
    if (pathParam !== null && pathParam !== '' && pathParam !== '0') {
      return '/' + pathParam;
    } else {
      return '';
    }

  }


}
