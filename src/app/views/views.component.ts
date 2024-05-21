import { Component, OnInit } from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'; // Import ScrollTrigger
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.css']
})
export class ViewsComponent implements OnInit {

  tl: gsap.core.Timeline;


  
  constructor() {
    this.tl = gsap.timeline({ paused: true });
    gsap.registerPlugin(ScrollTrigger);
  }


  ngOnInit(): void {
    this.setupTitleAnimation();    
    const textWrapper = document.querySelector(".title");
    const box = document.querySelector(".box");
    if (textWrapper && box) {
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

      gsap.to(".box", { y: "-100vw", x:"50vh", duration: 2.4, ease: "expo.inOut", delay: 1 });
      gsap.from("img", { scale: "0", duration: 4, ease: "expo.inOut", delay: 0 });
      gsap.to(".wrapper-img", { width: "25vw", height: "30vw", duration: 2.4, ease: "expo.inOut", delay: 3.6 });
      gsap.from(".img", { opacity: 0, duration: 0.4, ease: "expo.inOut", delay: 3.4 });
      gsap.to(".left", { width: "20vw", height: "26vw", x: "-18vw", y: "5vw", rotation: -10, duration: 2, ease: "expo.inOut", delay: 3.8 });
      gsap.to(".right", { width: "20vw", height: "26vw", x: "18vw", y: "5vw", rotation: 10, duration: 2, ease: "expo.inOut", delay: 3.8 });

      const timeline = gsap.timeline();
      timeline.staggerFrom(
        [".menu > div", ".hero-container > div"],
        2,
        { opacity: 0, y: 30, ease: "expo.inOut" },
        0.1
      );
    }
  }

  setupTitleAnimation() {
    const titles = Array.from(document.querySelectorAll('.title')) as HTMLElement[];
    
    titles.forEach(title => {
      gsap.to(title, {
        scrollTrigger: {
          trigger: title,
          start: "100% 100%",
          end: "40% top",
          scrub: true
        },
        opacity: 0,
        duration: 0.1,
        ease: "none"
      });
    });
  }

}