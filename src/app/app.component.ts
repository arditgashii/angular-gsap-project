import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-gsap-project';

  tl: gsap.core.Timeline;
  isNavOpen: boolean = false;

  toggleNav() {
    this.isNavOpen = !this.isNavOpen;
  }
  constructor() {
    this.tl = gsap.timeline({ paused: true });
  }

  openNav() {
    this.animateOpenNav();
    const navBtn = document.getElementById("nav");
    if (navBtn) {
      navBtn.onclick = (e) => {
        this.tl.reversed(!this.tl.reversed());
        navBtn.classList.toggle("active");
      };
    }
  }
  

  animateOpenNav() {
    const mobileNav = document.getElementById("mb_nav");
    this.tl
      .to(mobileNav, {
        duration: 0.6,
        ease: "sine",
        y: 0
      })
      .set('body', { overflow: 'hidden' })
      .to(".nav__link", {
        opacity: 1,
        ease: "power3.out",
        y: 0,
        duration: 0.8,
        stagger: 0.2,
      })
      .reverse();
  }


  ngOnInit(): void {
    this.openNav();
  }
}
