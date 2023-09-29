import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataAboutService } from '../services/data-about.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent implements OnInit, OnDestroy {
  aboutMeData: any;
  private dataSubscription!: Subscription;

  constructor(private dataAboutService: DataAboutService) {}

  ngOnInit(): void {
    console.log('Abonnement créé');
    this.dataAboutService.getAboutMe().subscribe((data) => {
      this.aboutMeData = data;
    });
  }

  ngOnDestroy() {
    console.log('Abonnement détruit');
    if (this.dataSubscription) {
      this.dataSubscription.unsubscribe();
    }
  }
}
