import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MusicComponent } from './music/music.component';
import { HomeComponent } from './home/home.component';
import { PhotoComponent } from './photo/photo.component';
import { TourDateComponent } from './tour-date/tour-date.component';

const routes: Routes = [
  { path: 'music', component: MusicComponent },
  { path: '', component: HomeComponent },
  { path: 'photo', component: PhotoComponent },
  { path: 'tour-date', component: TourDateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
