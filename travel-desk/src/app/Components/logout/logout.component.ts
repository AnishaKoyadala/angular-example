import {ApiResponse} from '../../model/apiResponse.model';
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../../services/api.service';
import {TokenService} from '../token.service';

@Component({
  selector: 'app-logout-form',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
  providers: [
    ApiService,
    TokenService
  ]
})
export class LogoutComponent implements OnInit {
  componentName = 'Logout';
  error = '';
  apiUri = '';
  success = '';
  constructor(
    private router: Router,
    private apiService: ApiService,
    private tokenService: TokenService) {
    this.error = '';
    this.apiUri="/assets/data/employee.json"
  }
  ngOnInit() {
    this.logout();
    this.success="Logged Out !"
  }
  
  logout() {
   this.router.navigate(['/login']);
  }
 

  


}
