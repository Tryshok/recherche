import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { HotspotPage } from '../pages/hotspot/hotspot';
import { pingHostpage } from '../pages/pingHost/pingHost';
import { MotionPage } from '../pages/motion/motion';
import { GyroscopePage } from '../pages/gyroscope/gyroscope';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Hotspot } from '@ionic-native/hotspot';
import { DeviceMotion } from '@ionic-native/device-motion';
import { Gyroscope } from '@ionic-native/gyroscope';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    HotspotPage,
    pingHostpage,
    MotionPage,
    GyroscopePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    HotspotPage,
    pingHostpage,
    MotionPage,
    GyroscopePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Hotspot,
    DeviceMotion,
    Gyroscope,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
