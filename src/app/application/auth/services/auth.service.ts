import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { SharedService } from '../../shared/shared.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { LoginDetails } from '../interfaces/auth.interface';
import { LoaderService } from '../../shared/services/loader.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router,
    private fireAuth: AngularFireAuth,
    private sharedService: SharedService,
    private loaderService: LoaderService
  ) { }

  // login with email and password
  async login(details: LoginDetails) {
    await this.loaderService.presentSpinner();
    this.fireAuth.signInWithEmailAndPassword(details.email, details.password)
    .then(result => {
      localStorage.setItem('credential', JSON.stringify(details));
      this.loaderService.dismissSpinner();
      this.router.navigate(['/dashboard'], { replaceUrl: true });
    })
    .catch(error => {
      console.error(error);
      this.loaderService.dismissSpinner();
      this.sharedService.errorMessage('Incorrect username or password.');
    });
  }

  // auto login with email and password
  public initAutoLogin() {
    const user: LoginDetails = JSON.parse(localStorage.getItem('credential')!);
    if (user && this.sharedService.isOnline) this.login(user);
    else this.router.navigate(['/login'], { replaceUrl: true });
  }


  async logout() {
    await this.fireAuth.signOut();
    localStorage.clear();
    this.router.navigate(['/login'], { replaceUrl: true });
  }
}
