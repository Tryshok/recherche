import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Hotspot, HotspotNetwork, HotspotConnectionInfo } from '@ionic-native/hotspot';

@Component({
    selector: 'pingHostpage',
    templateUrl: 'pingHost.html'
})
export class pingHostpage {

    //hotspotNetworks: Array<{ ssid: string, bssid: string, frequency: number, level: number, timestamp: number, capabilities: string }>;
    hotspotNetworks: any[];
    hotspotConnectionInfo: any;
    ping : string;

    constructor(private hotspot: Hotspot, public navCtrl: NavController) {
        /*this.hotspot.scanWifi().then((networks: Array<HotspotNetwork>) => {
            this.hotspotNetworks = networks;

            

            var taille = Object.keys(this.hotspotNetworks).length;
    
            for ( var i = 0 ; i < taille ; i++){
                //var distance = this.hotspotNetworks[i].level * 50  / 74;
               // this.hotspotNetworks[i].distance=distance;
               
            }
        });*/

        this.hotspot.getConnectionInfo().then((et: HotspotConnectionInfo) => {
            this.hotspotConnectionInfo = et;
            this.hotspot.pingHost(this.hotspotConnectionInfo.IPAddress.replace("/","")).then( res  => this.ping = res);
        });
    }
}

        /*
        , public ping : string
    
            var taille = Object.keys(this.hotspotNetworks).length;
    
            for ( var i = 0 ; i < taille ; i++){
                var distance = this.hotspotNetworks[i].level * 50  / 74;
                this.hotspotNetworks[i].distance=distance;
            }
            */
        
        //this.hotspotConnectionInfo = "Bonjour";

        /*this.hotspot.getConnectionInfo().then((et: HotspotConnectionInfo) => {
            this.hotspotConnectionInfo = et;
        });*/
            
/*
            var taille = Object.keys(this.hotspotConnectionInfo).length;

            for ( var i = 0 ; i < taille ; i++){
                var distance = this.hotspotConnectionInfo[i].level * 50  / 74;
                this.hotspotConnectionInfo[i].distance=distance;
                //this.hotspotNetworks[i].test=this.hotspot.pingHost(test);
            }
            */
            
        
        
      
        

/*this.hotspot.pingHost(ping).then((test : string)=> {
            this.ping = test;

        })*/
        
        // 50 m = 74 dbm
        //100 m = 80 dbm
 /*       
    var count = 0;

    for (var property in this.hotspotNetworks) {
        if (Object.prototype.hasOwnProperty.call(this.hotspotNetworks, property)) {
            count++;
        }
    }
*/
    //var taille = Object.keys(this.hotspotNetworks).length;
    //this.hotspotNetworks.push(taille);
   // console.log(taille);
    
/*
        for ( var i =0 ; i< taille ; i++){
            console.log(taille);
           // var distance = this.hotspotNetworks[i].level * 50  / 74;
            this.hotspotNetworks[i].push(taille);
            console.log(this.hotspotNetworks);
        }
*/