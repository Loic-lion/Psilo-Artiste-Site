import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../services/data-about.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tour-date',
  templateUrl: './tour-date.component.html',
  styleUrls: ['./tour-date.component.scss'],
})
export class TourDateComponent implements OnInit, OnDestroy {
  dateData: any;
  private dataSubscription!: Subscription;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe((data) => {
      this.dateData = data;
      if (Array.isArray(this.dateData.Date)) {
        this.dateData.Date.reverse();
      }
    });

    this.dataSubscription = new Subscription();
  }

  ngOnDestroy(): void {
    if (this.dateData) {
      this.dataSubscription.unsubscribe();
    }
  }
}
