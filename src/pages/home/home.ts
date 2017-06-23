import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { TutorialSelectPage } from '../tutorial-select/tutorial-select';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public alertCtrl: AlertController,
              public navCtrl: NavController) {
  }

  notImpl() {
    let alert = this.alertCtrl.create({
      title: 'Sorry!',
      subTitle: 'Not implemented...',
      buttons: ['OK']
    });
    alert.present();
  }

  goToTutorialSelect() {
    this.navCtrl.push(TutorialSelectPage);
  }
}
