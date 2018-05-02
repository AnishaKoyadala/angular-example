import {Injectable} from '@angular/core';

@Injectable()
export class UtilityService {

  private isUserLogged = false;
  public isStringResult(value): boolean {
    let isResult: boolean;
    if (value !== null && value !== '') {
      isResult = true;
    } else {
      isResult = false;
    }
    return isResult;
  }
}
