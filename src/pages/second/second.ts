import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SecondPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-second',
  templateUrl: 'second.html',
})
export class SecondPage {

  message: string;

  constructor(private navCtrl: NavController, private navParams: NavParams) {
  
    this.message = this.navParams.get('message');
    alert(this.message);
  }

  navigateToThirdPage(): void {
    this.navCtrl.push('ThirdPage');
  }

  navigateBack(): void {
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SecondPage');
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter is fired just as the page is about to become active.');
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter is fired each time the page has entered.');
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave is fired each time the page is ABOUT to leave.');
  }
  
  ionViewDidLeave() {
    console.log('ionViewDidLeave is fired when the user has left the page.');
  }

  ionViewWillUnload() {
    console.log('ionViewWillUnload run when the page is about to be destroyed.');
  }

}
