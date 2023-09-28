import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MusicComponent } from './music/music.component';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { PhotoComponent } from './photo/photo.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { TourDateComponent } from './tour-date/tour-date.component';

const routes: Routes = [
  { path: 'music', component: MusicComponent },
  { path: '', component: HomeComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'contact-me', component: ContactMeComponent },
  { path: 'photo', component: PhotoComponent },
  { path: 'tour-date', component: TourDateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
