import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DeviceMotion, DeviceMotionAccelerationData, DeviceMotionAccelerometerOptions } from '@ionic-native/device-motion';

@Component({
    selector: 'page-motion',
    templateUrl: 'motion.html'
})
export class MotionPage {

    accelerationDevice: DeviceMotionAccelerationData;
    refreshDevice: DeviceMotionAccelerometerOptions;
    tabAccelerationDevice: Object[];
    vitesseReelX : number;
    vitesseReelY : number;
    vitesseReelZ : number;

    constructor(private deviceMotion: DeviceMotion, public navCtrl: NavController, public navParams: NavParams,) {
        this.deviceMotion.getCurrentAcceleration().then((acceleration: DeviceMotionAccelerationData ) => {
            this.accelerationDevice = acceleration;
        });  

        var frequency = 1;
        var option: DeviceMotionAccelerometerOptions = {
            frequency: frequency*1000
        };

        this.tabAccelerationDevice = new Array<Object>();
        var vitesse0 = 0;
        var vitesseX = 0;
        var vitesseY = 0;
        var vitesseZ = 0;
        
        for (var i=0; i<10; i++ ){
            // Watch device acceleration
            var subscription = this.deviceMotion.watchAcceleration(option).subscribe((acceleration: DeviceMotionAccelerationData) => {
                this.accelerationDevice = acceleration;
                this.tabAccelerationDevice.push(<Object>acceleration);

                // v = v0 + a*t
                /*if((acceleration.x + acceleration.y + acceleration.z) > 10 ){

                }*/
                
                
                if(vitesseX = 0){
                    vitesseX = vitesse0 + acceleration.x*frequency;
                    this.vitesseReelX = vitesseX;
                } else {
                    vitesseX = vitesseX + acceleration.x*frequency;
                    this.vitesseReelX = vitesseX;
                }

                if(vitesseY = 0){
                    vitesseY = vitesse0 + acceleration.y*frequency;
                    this.vitesseReelY = vitesseY;
                } else {
                    vitesseY = vitesseY + acceleration.y*frequency;
                    this.vitesseReelY = vitesseY;
                }

                if(vitesseZ = 0){
                    vitesseZ = vitesse0 + acceleration.z*frequency;
                    this.vitesseReelZ = vitesseZ;
                } else {
                    vitesseZ = vitesseZ + acceleration.z*frequency;
                    this.vitesseReelZ = vitesseZ;
                }
            });            

            
 
        }

        // Stop watch
        subscription.unsubscribe();

       

    }
    
}
