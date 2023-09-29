import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../services/data-about.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent implements OnInit, OnDestroy {
  aboutMeData: any;
  private dataSubscription!: Subscription;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    console.log('Abonnement créé');
    this.dataService.getData().subscribe((data) => {
      this.aboutMeData = data;
    });
    this.dataSubscription = new Subscription();
  }

  ngOnDestroy(): void {
    console.log('Abonnement détruit');
    if (this.dataSubscription) {
      this.dataSubscription.unsubscribe();
    }
  }
}
