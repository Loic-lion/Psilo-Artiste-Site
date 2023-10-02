import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data-about.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss'],
})
export class PhotoComponent implements OnInit {
  photoData: any;
  private dataSubscription!: Subscription;
  selectedImageUrl: string | null = null;
  showModal: boolean = false;
  imageUrls: string[] = [];
  currentIndex: number = 0;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe((data) => {
      this.photoData = data;
      this.imageUrls = this.photoData.Photo.map((item: any) => item.src);
    });
  }

  onPreviewImage(imageUrl: string, index: number): void {
    this.selectedImageUrl = imageUrl;
    this.showModal = true;
    this.currentIndex = index;
  }

  onCloseModal(): void {
    this.selectedImageUrl = null;
    this.showModal = false;
    this.currentIndex = 0;
  }

  ngOnDestroy() {
    if (this.dataSubscription) {
      this.dataSubscription.unsubscribe();
    }
  }
}
