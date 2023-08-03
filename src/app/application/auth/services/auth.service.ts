import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { LoginDetails } from '../interfaces/LoginDetails';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { CommonService } from '../../../shared/services/common.service';
import { LoaderService } from '../../../shared/services/loader.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router,
    private fireAuth: AngularFireAuth,
    private commonService: CommonService,
    private loaderService: LoaderService
  ) { }

  // login with email and password
  async login(details: LoginDetails) {
    await this.loaderService.showLoader('Verifying user');
    this.fireAuth.signInWithEmailAndPassword(details.email, details.password)
    .then(async (result) => {
      const idToken = await result.user.getIdToken();
      localStorage.setItem('idToken', idToken);
      localStorage.setItem('credential', JSON.stringify(details));
      this.loaderService.hideLoader();
      this.router.navigate(['/dashboard'], { replaceUrl: true });
    })
    .catch(error => {
      console.error(error);
      this.loaderService.hideLoader();
      this.commonService.errorMessage('Incorrect username or password.');
    });
  }

  // auto login with email and password
  public initAutoLogin(user: LoginDetails) {
    if (user) this.login(user);
    else this.router.navigate(['/login'], { replaceUrl: true });
  }


  async logout() {
    await this.fireAuth.signOut();
    localStorage.clear();
    this.router.navigate(['/login'], { replaceUrl: true });
  }
}
