import { Component } from '@angular/core';
import { Http } from '@angular/http';
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
  chapter;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
      this.item = navParams.data.item;
      this.loadPage();
  }

  loadPage() {
    this.http.get('assets/chapters/test.ch').subscribe(response => this.chapter = response.text());
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Chapter');
  }

}
