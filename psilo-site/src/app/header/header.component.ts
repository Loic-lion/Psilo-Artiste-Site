import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isMenuOpen: boolean = false;
  isScrolled: boolean = false;

  constructor(
    private router: Router,
    private renderer: Renderer2,
    private el: ElementRef
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/') {
          this.isScrolled = false;
          this.renderer.removeClass(this.el.nativeElement, 'header-scroll');
        } else {
          this.isScrolled = true;
        }
      }
    });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    if (this.router.url === '/') {
      const scrollY = window.scrollY;
      if (scrollY >= window.innerHeight) {
        this.isScrolled = true;
      } else {
        this.isScrolled = false;
        this.renderer.removeClass(this.el.nativeElement, 'header-scroll');
      }
    }
  }
}
