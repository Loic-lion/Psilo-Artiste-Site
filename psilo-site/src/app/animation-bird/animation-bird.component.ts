import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animation-bird',
  templateUrl: './animation-bird.component.html',
  styleUrls: ['./animation-bird.component.scss'],
})
export class AnimationBirdComponent implements OnInit {
  images: string[] = [
    '../../assets/img/anim_bird/bird1.svg',
    '../../assets/img/anim_bird/bird10.svg',
    '../../assets/img/anim_bird/bird11.svg',
    '../../assets/img/anim_bird/bird11.svg',
    '../../assets/img/anim_bird/bird12.svg',
    '../../assets/img/anim_bird/bird12.svg',
    '../../assets/img/anim_bird/bird12.svg',
    '../../assets/img/anim_bird/bird10.svg',
    '../../assets/img/anim_bird/bird11.svg',
    '../../assets/img/anim_bird/bird11.svg',
    '../../assets/img/anim_bird/bird12.svg',
    '../../assets/img/anim_bird/bird12.svg',
    '../../assets/img/anim_bird/bird12.svg',
    '../../assets/img/anim_bird/bird10.svg',
    '../../assets/img/anim_bird/bird11.svg',
    '../../assets/img/anim_bird/bird11.svg',
    '../../assets/img/anim_bird/bird10.svg',
    '../../assets/img/anim_bird/bird1.svg',
    '../../assets/img/anim_bird/bird2.svg',
    '../../assets/img/anim_bird/bird3.svg',
    '../../assets/img/anim_bird/bird4.svg',
    '../../assets/img/anim_bird/bird5.svg',
    '../../assets/img/anim_bird/bird6.svg',
    '../../assets/img/anim_bird/bird4.svg',
    '../../assets/img/anim_bird/bird8.svg',
    '../../assets/img/anim_bird/bird9.svg',
    '../../assets/img/anim_bird/bird5.svg',
    '../../assets/img/anim_bird/bird6.svg',
    '../../assets/img/anim_bird/bird4.svg',
    '../../assets/img/anim_bird/bird8.svg',
    '../../assets/img/anim_bird/bird9.svg',
    '../../assets/img/anim_bird/bird5.svg',
    '../../assets/img/anim_bird/bird6.svg',
    '../../assets/img/anim_bird/bird4.svg',
    '../../assets/img/anim_bird/bird3.svg',
    '../../assets/img/anim_bird/bird2.svg',
  ];
  currentImage: string = this.images[0];
  currentIndex: number = 0;

  ngOnInit() {
    this.animateImages();
  }

  animateImages() {
    const interval = 50; // Intervalle entre les images (2 secondes)
    const pauseBetweenLoops = 4000; // Pause entre les boucles (4 secondes)

    const animate = () => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
      this.currentImage = this.images[this.currentIndex];

      if (this.currentIndex === 0) {
        // Planifier la prochaine boucle après la pause
        setTimeout(() => {
          this.currentIndex = 0; // Revenir à la première image
          this.currentImage = this.images[0];
          animate(); // Commencer la boucle suivante
        }, pauseBetweenLoops);
      } else {
        setTimeout(animate, interval); // Répéter l'animation après l'intervalle
      }
    };

    // Commencer l'animation
    animate();
  }
}
