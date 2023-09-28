import { Component, OnInit } from '@angular/core';
import { DataMusicService } from '../services/data-music.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss'],
})
export class MusicComponent implements OnInit {
  musicData: any;

  constructor(private dataMusicService: DataMusicService) {}

  ngOnInit(): void {
    this.dataMusicService.getMusic().subscribe((data) => {
      this.musicData = data;
    });
  }
}
