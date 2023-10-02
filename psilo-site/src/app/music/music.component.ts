import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data-about.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss'],
})
export class MusicComponent implements OnInit {
  musicData: any;
  private dataSubscription!: Subscription;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    console.log('Abonnement music créé');
    this.dataService.getData().subscribe((data) => {
      this.musicData = data;
    });
  }

  ngOnDestroy() {
    console.log('Abonnement music détruit');
    if (this.dataSubscription) {
      this.dataSubscription.unsubscribe();
    }
  }
}
