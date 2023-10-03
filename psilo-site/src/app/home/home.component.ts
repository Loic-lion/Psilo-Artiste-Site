import { Component, OnInit } from '@angular/core';
import { FacebookPostService } from '../services/facebook-post.service';
import { YoutubeVideoService } from '../services/youtube-video.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  latestPosts: any[] = [];
  latestVideo: any;

  constructor(
    private facebookService: FacebookPostService,
    private youtubeService: YoutubeVideoService
  ) {}

  ngOnInit() {
    this.getLatestFacebookPosts();
    this.getLatestYoutubeVideo();
  }

  getLatestFacebookPosts() {
    this.facebookService
      .getLatestPosts()
      .then((posts) => {
        this.latestPosts = posts;
      })
      .catch((error) => {
        console.error(
          'Erreur lors de la récupération des derniers posts Facebook',
          error
        );
      });
  }
  getLatestYoutubeVideo() {
    this.youtubeService.getLatestVideo().subscribe((data) => {
      console.log(data);
      this.latestVideo = data.items[0];
    });
  }
}
