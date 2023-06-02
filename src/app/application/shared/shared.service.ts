import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  constructor(
    private toastCtrl: ToastController,
  ) { }

  async successMessage(msg: string, duration?: number, isDark?: boolean) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: duration ? duration : 2000,
      animated: true,
      cssClass: 'text-center',
      color: isDark ? 'dark' : 'primary'
    });
    toast.present();
  }

  async errorMessage(msg: string, duration?:number) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: duration ? duration : 2000,
      animated: true,
      cssClass: 'text-center',
      color: 'danger'
    });
    toast.present();
  }

  get isOnline() {
    return !!window.navigator.onLine;
  }
}
