import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Gyroscope, GyroscopeOrientation, GyroscopeOptions } from '@ionic-native/gyroscope';

@Component({
    selector: 'page-gyroscope',
    templateUrl: 'gyroscope.html'
})
export class GyroscopePage {

    gyro: any;
    orientationDevice: GyroscopeOrientation

    constructor(private gyroscope: Gyroscope, public navCtrl: NavController) {
        this.gyroscope.getCurrent().then((orientation: GyroscopeOrientation) => {
            this.gyro = orientation;
        })
        .catch()

        var frequency = 1;
        var option: GyroscopeOptions = {
            frequency: frequency*1000
        };

        for (var i=0; i<10; i++ ){
            // Watch device acceleration
            var subscription = this.gyroscope.watch(option).subscribe((orientation: GyroscopeOrientation) => {
                this.orientationDevice = orientation;
            });
        }

        // Stop watch
        subscription.unsubscribe();
        
    }

}
