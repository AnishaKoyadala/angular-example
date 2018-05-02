import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../services/authentication.service';
import {TokenService} from '../../Components/token.service';

@Component({
  selector: 'app-authentication-form',
  templateUrl: './authentication-form.component.html',
  styleUrls: ['./authentication-form.component.css'],
  providers: [AuthenticationService]
})
export class AuthenticationFormComponent implements OnInit {
  authenticationForm: FormGroup;
  error = '';
  tableDiv = false;
  constructor(
    private router: Router,
    private tokenService: TokenService,
    private authenticationService: AuthenticationService,
    private fb: FormBuilder) {
this.tableDiv = false;
  }
  ngOnInit() {
		this.authenticationForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: this.fb.group({pwd: ['', [Validators.required, Validators.minLength(8)]]}),
    });

  }
  
  openFormLogin(){
		this.tableDiv = true;

  }

  authenticateUser() {
  if (this.authenticationForm.get('email').value === 'neeraj@gmail.com' && this.authenticationForm.get('password').get('pwd').value === 'password') {
        

this.router.navigate(['dashboard']);

      } else {
         //this.tokenService.setUserLoggedIn(false);
        this.error = 'Invalid Username or Password';
      }
	
  
    //this.authenticate();
  }
  
  authenticate() {
    this.authenticationService.authenticate(this.authenticationForm.get('email').value, this.authenticationForm.get('password').get('pwd').value).subscribe((apiResponse) => {
      if (apiResponse.statusCode === '200') {
        if (apiResponse.data.isEnabled) {
          this.tokenService.setUserLoggedIn(true);
          if (apiResponse.data.userType === 'admin') {
            this.router.navigate(['dashboard']);
          }
        } else {
          this.tokenService.setUserLoggedIn(false);
          this.error = 'account is blocked';
        }



      } else {
         this.tokenService.setUserLoggedIn(false);
        this.error = 'Invalid Username or Password';
      }
    },
      err => {
        // Log errors if any
        this.error = err;
      });
  }
}
