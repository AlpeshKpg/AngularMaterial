import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonUtils } from '../../Common/commonutil';
import { UserAPI } from '../../Services/UserAPI.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public username: string;
  public password: string;
  public error: string;

  frmLogin: FormGroup;

  constructor(private fb: FormBuilder,
    private router: Router,
    private api: UserAPI) {
    localStorage.setItem('Email', "");
    this.error = '';
    this.SetForm();
  }

  SetForm() {
    this.frmLogin = this.fb.group({
      Username: ['', Validators.required],
      Password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  getErrorCSS(fieldName: string) {
    {
      return {
        'has-error': (
          !this.frmLogin.get(fieldName).valid ||
          this.frmLogin.get(fieldName).touched
        )
      };
    }
  }

  revertfrm() {
    this.SetForm();
    Object.keys(this.frmLogin.value).forEach(field => {
      this.frmLogin.get(field).markAsUntouched();
      this.frmLogin.get(field).setErrors(null);
    });
  }

  async login() {
    Object.keys(this.frmLogin.value).forEach(field => {
      this.frmLogin.get(field).markAsTouched();
    });

    if (this.frmLogin.valid) {
      this.username = this.frmLogin.controls.Username.value;
      this.password = this.frmLogin.controls.Password.value;
      try {
        const resp = await this.api.AuthenticateUser(this.username, this.password);
        if (resp.ID === 0) {
          this.error = 'Invalid credential';
        } else {
          CommonUtils.SetCurrentUserID(resp.ID);
          localStorage.setItem('Email', resp.EmailID.toString());
        }
      } catch (error) {
        //if response is null it will run catch block with error resp is null
        //Here we have not implemented any api so redirecting to note page by setting user logged in manually.
        localStorage.setItem('Email', "Test@gmail.com");
        this.router.navigateByUrl('/admin');
      }
    }
  }

}
