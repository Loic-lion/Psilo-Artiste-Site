import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationBirdComponent } from './animation-bird.component';

describe('AnimationBirdComponent', () => {
  let component: AnimationBirdComponent;
  let fixture: ComponentFixture<AnimationBirdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnimationBirdComponent]
    });
    fixture = TestBed.createComponent(AnimationBirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
