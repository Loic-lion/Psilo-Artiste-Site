import { Component, OnInit, HostListener } from '@angular/core';
import { FacebookPostService } from '../services/facebook-post.service';
import { DataService } from '../services/data-about.service';
import { Subscription } from 'rxjs';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  latestPosts: any[] = [];
  releaseData: any;

  isScrolledFirstSection: boolean = false;
  isScrolledSecondSection: boolean = false;
  isScrolledVideoSection: boolean = false;

  private dataSubscription!: Subscription;

  constructor(
    private facebookService: FacebookPostService,
    private dataService: DataService,
    private viewportScroller: ViewportScroller
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

  scrollToAnchor(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
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

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;

    const windowHeight = window.innerHeight;
    const scrollPercentage = (scrollPosition / windowHeight) * 100;

    if (scrollPercentage >= 60) {
      this.isScrolledFirstSection = true;
    }
    if (scrollPercentage >= 160) {
      this.isScrolledSecondSection = true;
    }
    if (scrollPercentage >= 260) {
      this.isScrolledVideoSection = true;
    }
  }
}
