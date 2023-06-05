import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { LoginDetails } from '../../interfaces/LoginDetails';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  showPassword: boolean = false;
  formSubmitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  submitLoginForm(details: LoginDetails){
    this.formSubmitted = true;
    if(this.loginForm.valid){
      this.authService.login(details);
    }
  }

  togglePassword(){
    this.showPassword = !this.showPassword
  }

}
