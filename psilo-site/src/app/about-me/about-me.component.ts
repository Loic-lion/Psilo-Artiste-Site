import { Component, OnInit } from '@angular/core';
import { DataAboutService } from '../services/data-about.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent implements OnInit {
  aboutMeData: any;

  constructor(private dataAboutService: DataAboutService) {}

  ngOnInit(): void {
    this.dataAboutService.getAboutMe().subscribe((data) => {
      this.aboutMeData = data;
    });
  }
}
