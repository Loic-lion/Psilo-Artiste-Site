import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-gallery',
  templateUrl: './modal-gallery.component.html',
  styleUrls: ['./modal-gallery.component.scss'],
})
export class ModalGalleryComponent {
  @Input() imageUrl: string | null = null;
  @Input() show: boolean = false;
  @Output() close = new EventEmitter<void>();
  @Input() imageUrls: string[] = [];
  @Input() currentIndex: number = 0;

  

  onClose(): void {
    this.close.emit();
  }

  prevImage(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.imageUrl = this.imageUrls[this.currentIndex];
    }
  }

  nextImage(): void {
    if (this.currentIndex < this.imageUrls.length - 1) {
      this.currentIndex++;
      this.imageUrl = this.imageUrls[this.currentIndex];
    }
  }
}
