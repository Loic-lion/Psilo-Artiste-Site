import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalGalleryComponent } from './modal-gallery.component';

describe('ModalGalleryComponent', () => {
  let component: ModalGalleryComponent;
  let fixture: ComponentFixture<ModalGalleryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalGalleryComponent]
    });
    fixture = TestBed.createComponent(ModalGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
