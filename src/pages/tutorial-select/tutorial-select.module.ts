import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TutorialSelectPage } from './tutorial-select';
import { HomePage } from '../home/home';
@NgModule({
  declarations: [
    TutorialSelectPage
  ],
  imports: [
    IonicPageModule.forChild(TutorialSelectPage),
  ],
  exports: [
    TutorialSelectPage
  ]
})
export class TutorialSelectModule {}
