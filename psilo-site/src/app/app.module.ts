import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { MusicComponent } from './music/music.component';
import { TourDateComponent } from './tour-date/tour-date.component';

import { PhotoComponent } from './photo/photo.component';
import { ModalGalleryComponent } from './modal-gallery/modal-gallery.component';
import { AnimationBirdComponent } from './animation-bird/animation-bird.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    MusicComponent,
    TourDateComponent,
    PhotoComponent,
    ModalGalleryComponent,
    AnimationBirdComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
