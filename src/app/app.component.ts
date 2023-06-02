import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SharedService } from './application/shared/shared.service';
import { AuthService } from './application/auth/services/auth.service';
import { LoginDetails } from './application/auth/interfaces/auth.interface';
import { LoaderService } from './application/shared/services/loader.service';

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
    private sharedService: SharedService,
    private loaderService: LoaderService,
  ) {
    this.initializeApp();
  }

  private initializeApp() {
    this.loaderService.showLoader('Verifying user');
    this.platform.ready().then(() => {
      this.checkIsUserValid();
    })
  }

  async checkIsUserValid() {
    const user: LoginDetails = JSON.parse(localStorage.getItem('credential')!);
    if (user && this.sharedService.isOnline) this.authService.initAutoLogin();
    else this.router.navigate(['/login'], { replaceUrl: true });
  }
}
