import {ApiResponse} from '../../model/apiResponse.model';
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../../services/api.service';
import {TokenService} from '../token.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [
    ApiService,
    TokenService
  ]
})
export class EmployeeComponent implements OnInit {
  componentName = "Employee's Reporting to Me";
  formFeild1 = 'ID';
  formFeild2 = 'EMAIL';
  formFeild3 = 'NAME';
  formFeild4 = 'PROJECT';
  htmlForm: FormGroup;
  formData: Array<any> = [];
  private fieldPermission: Array<any> = [];
  tableDiv = false;
  formDiv = false;
  error = '';
  apiUri = '';
  success = '';
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private apiService: ApiService,
    private tokenService: TokenService) {
    this.error = '';
    this.apiUri='/assets/data/employee.json';
  }
  ngOnInit() {
    this.validate();
    this.componantCall(this.tokenService.getAll(), null);
    
  }


  validate() {
    this.htmlForm = this.fb.group({
      empId: ['0'],
      empName: [''],
      empProjectName: ['']
    });

  }


  totalRecords() {
    this.apiService.load(this.apiUri,null, null, null).subscribe((apiResponse) => {
   
      if (apiResponse.statusCode === '200') {
        this.formData = apiResponse.data;
        this.tableDiv = true;
        this.formDiv = false;
      } else {
        this.error = apiResponse.statusMessage;
      }
    },
      err => {
        // Log errors if any
        this.error = err;
      });
  }



  openForm(fieldValue: any) {
    if (fieldValue != null && fieldValue !== 'null') {
      this.setValue(fieldValue);
    }

  }
  setValue(data) {
    this.htmlForm.controls['empId'].setValue(data.empId);
    this.htmlForm.controls['empName'].setValue(data.empName);
    this.htmlForm.controls['empProjectName'].setValue(data.empProjectName);
  }
  saveOrUpdate() {
    this.apiService.saveOrUpdate('PUT',this.apiUri, this.htmlForm.value, null, null, this.htmlForm.controls['roleId'].value).subscribe((apiResponse) => {
      if (apiResponse.statusCode === '200') {
        this.error = apiResponse.statusMessage;
      } else {
        this.error = apiResponse.statusMessage;
      }
    },
      err => {
        // Log errors if any
        this.error = err;
      });

  }

  componantCall(action: string, fieldValue: any) {
    this.tableDiv = true;
   // if (this.tokenService.isAuthenticated()) {
      if (action === this.tokenService.getAll()) {
        this.formDiv = false;
        this.totalRecords();
      }
      if (action === this.tokenService.update()) {
        this.formDiv = true;
        this.tableDiv = false;
        this.saveOrUpdate();
      }
      if (action === this.tokenService.delete()) {
        this.totalRecords();
      }
      if (action === this.tokenService.openForm()) {
        this.formDiv = true;
        this.tableDiv = false;
        this.openForm(fieldValue);

      }
    //}

  }


}
