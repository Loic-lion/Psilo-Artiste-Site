import { Component, OnInit } from '@angular/core';
import { FacebookPostService } from '../services/facebook-post.service';
import { DataService } from '../services/data-about.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  latestPosts: any[] = [];
  releaseData: any;
  private dataSubscription!: Subscription;

  constructor(
    private facebookService: FacebookPostService,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.getLatestFacebookPosts();
    this.dataService.getData().subscribe((data) => {
      this.releaseData = data;
    });
  }

  ngOnDestroy() {
    if (this.dataSubscription) {
      this.dataSubscription.unsubscribe();
    }
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
}
