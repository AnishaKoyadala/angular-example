import {UtilityService} from './utility.service';
import {Injectable} from '@angular/core';

@Injectable()
export class TokenService {

  private isUserLogged = false;
  constructor(private utilityService: UtilityService) {}
  getAccessKeyToken(): string {
    return localStorage.getItem('accessKey');
  }

  getUserKeyToken(): string {
    return localStorage.getItem('userKey');
  }

  isAuthenticated(): boolean {
    let isAuthenticated: boolean;
    if (this.utilityService.isStringResult(this.getAccessKeyToken()) && this.utilityService.isStringResult(this.getUserKeyToken())) {
      isAuthenticated = true;

    } else {
      isAuthenticated = false;
    }


    return isAuthenticated;
  }
  public isUserLoggedIn(): boolean {
    return this.isUserLogged;
  }

  public setUserLoggedIn(value): void {
    this.isUserLogged = value;
  }
  public getAll(): string {
    return 'loadAll';
  }

  public getOne(): string {
    return 'getOne';
  }

  public post(): string {
    return 'post';
  }
  public update(): string {
    return 'update';
  }
  public delete(): string {
    return 'delete';
  }
  public openForm(): string {
    return 'openForm';
  }

}
