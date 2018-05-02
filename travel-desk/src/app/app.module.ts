import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

// component
import {AppComponent} from './app.component';
import {SidebarComponent} from './Components/sidebar/sidebar.component';
import {FooterBarComponent} from './Components/footer-bar/footer-bar.component';
import {MainPanelNavbarComponent} from './Components/main-panel-navbar/main-panel-navbar.component';
import {DashboardComponent} from './Components/dashboard/dashboard.component';
import {AuthenticationFormComponent} from './Components/authentication/authentication-form.component';
import {EmployeeComponent} from './Components/employee-form/employee.component';
import {LogoutComponent} from './Components/logout/logout.component';


import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {TokenInterceptor} from './Components/token.interceptor';


import {BgColorDirective} from './Directives/bg-color.directive';

import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';

import {ApiService} from './services/api.service';
import {ApiUrlService} from './services/apiUrl.service';
import {TokenService} from './Components/token.service';
import {UtilityService} from './Components/utility.service';

import {HttpService} from './services/http.service';

const appRoutes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'prefix'},
  {path: 'travel-desk', redirectTo: 'login', pathMatch: 'prefix'},
  {path: 'login', component: AuthenticationFormComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'reportMe', component: EmployeeComponent},
  {path: 'logout', component: LogoutComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    BgColorDirective,
    SidebarComponent,
    MainPanelNavbarComponent,
    FooterBarComponent,
    DashboardComponent,
    AuthenticationFormComponent,
    EmployeeComponent,
    LogoutComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true,
  }, ApiService, ApiUrlService, TokenService, UtilityService, HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
