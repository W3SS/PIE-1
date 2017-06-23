import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chapter } from '../chapter/chapter';
/**
 * Generated class for the TutorialSelect page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-tutorial-select',
  templateUrl: 'tutorial-select.html',
})
export class TutorialSelectPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  items = [
    'Introduction',
    'Variables',
    'Strings',
    'Math',
    'Branching',
    'Functions',
    'Classes',
    'Inheritance',
    'Project Structure',
    'Further Reading'
  ];

  goToChapter(item) {
    this.navCtrl.push(Chapter, { item: item });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TutorialSelect');
  }
}
