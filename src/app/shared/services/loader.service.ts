import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})

export class LoaderService {
  loader: any;
  isLoading = false;
  isSpinner = false;
  constructor(
    private loaderController: LoadingController,
  ) { }

  // showLoader is not working because it's take html as string
  public async showLoader(message: string) {
    if (!this.isLoading) {
      this.isLoading = true;
      let loader = await this.loaderController.create({
        spinner: null,
        message: `
       <img src="../../../../assets/images/loader-logo.png">
       <div class="loader"></div>
       <p>${message}</p>
       `,
        cssClass: 'loader-screen',
      });
      return await loader.present();
    }
  }

  public async hideLoader() {
    if (this.isLoading) {
      this.isLoading = false;
      return await this.loaderController.dismiss();
    }
    return false;
  }

  async presentSpinner() {
    if (!this.isSpinner) {
      return new Promise((resolve, reject) => {
        this.isSpinner = true;
        this.loaderController.create({
          backdropDismiss: false,
          cssClass: 'commonLoader',
          mode: 'md'
        }).then((res) => {
          res.present();
          resolve('')
        });
      })
    }
  }

  dismissSpinner() {
    if (this.isSpinner) {
      this.loaderController.dismiss().then((res) => {
        this.isSpinner = false;
      }).catch((err) => {
        console.log('Error occurred : ', err);
      });
    }
  }

}
