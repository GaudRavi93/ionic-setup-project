import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouteReuseStrategy } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire/compat';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from './../environments/environment';
import { SharedModule } from './shared/modules/shared.module';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideMenuComponent } from './shared/components/side-menu/side-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireAuthModule,
    IonicModule.forRoot({
      innerHTMLTemplatesEnabled: true
    }),
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
