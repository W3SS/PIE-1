import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Chapter } from './chapter';

@NgModule({
  declarations: [
    Chapter,
  ],
  imports: [
    IonicPageModule.forChild(Chapter),
  ],
  exports: [
    Chapter
  ]
})
export class ChapterModule {}
