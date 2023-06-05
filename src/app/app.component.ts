import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { CommonService } from './shared/services/common.service';
import { AuthService } from './application/auth/services/auth.service';
import { LoginDetails } from './application/auth/interfaces/LoginDetails';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    public router: Router,
    private platform: Platform,
    private authService: AuthService,
    private commonService: CommonService,
  ) {
    this.initializeApp();
  }

  private initializeApp() {
    this.platform.ready().then(() => {
      this.checkIsUserValid();
    })
  }

  /**
   * auto login when "idToken" and "credential" is available and user is online.
   * if user is offline then we can redirect to login page or do whatever you want.
  */
  async checkIsUserValid() {
    const isOnline: boolean = this.commonService.isOnline;
    const idToken: string = localStorage.getItem('idToken');
    const user: LoginDetails = JSON.parse(localStorage.getItem('credential'));
    if (user && idToken && isOnline) this.authService.initAutoLogin(user);
    else this.router.navigate(['/login'], { replaceUrl: true });
  }
}
