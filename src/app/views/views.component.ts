import { Component, OnInit } from '@angular/core';
import gsap from 'gsap';
import anime from 'animejs/lib/anime.es.js'; // Import animejs library

@Component({
  selector: 'app-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.css']
})
export class ViewsComponent implements OnInit {

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
    
    
    const textWrapper = document.querySelector(".title");
    if (textWrapper) {
      
      const innerHTML = textWrapper.textContent?.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      );
      if (innerHTML) {
        textWrapper.innerHTML = innerHTML;
      }

      anime.timeline().add({
        targets: ".title .letter",
        translateY: [100, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 2000,
        delay: (el: HTMLElement, i: number) => 4800 + 40 * i,
      });

      gsap.to(".box", { y: "-100vw", duration: 2.4, ease: "expo.inOut", delay: 1 });
      gsap.from("img", { scale: "0", duration: 4, ease: "expo.inOut", delay: 0 });
      gsap.to(".wrapper-img", { width: "25vw", height: "30vw", duration: 2.4, ease: "expo.inOut", delay: 3.6 });
      gsap.from(".img", { opacity: 0, duration: 0.4, ease: "expo.inOut", delay: 3.4 });
      gsap.to(".left", { width: "20vw", height: "26vw", x: "-20vw", y: "5vw", rotation: -10, duration: 2, ease: "expo.inOut", delay: 3.8 });
      gsap.to(".right", { width: "20vw", height: "26vw", x: "20vw", y: "5vw", rotation: 10, duration: 2, ease: "expo.inOut", delay: 3.8 });


      // GSAP timeline for staggered animation
      const timeline = gsap.timeline();
      timeline.staggerFrom(
        [".menu > div", ".hero-container > div"],
        2,
        { opacity: 0, y: 30, ease: "expo.inOut" },
        0.1
      );
    }
  }
}
