import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Chapter page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-chapter',
  templateUrl: 'chapter.html',
})
export class Chapter {

  item;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.item = navParams.data.item;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Chapter');
  }

}
