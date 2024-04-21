import { Component, OnInit } from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css']
})
export class SecondPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);

    // Banner Big Image
    gsap.to("#bannerBigimg", {
      duration: 2,
      yPercent: 150,
      ease: "power2.inOut",
      yoyo: true,
      repeat: 1,
      repeatRefresh: true
    });

    // Banner Big Text
    gsap.to("#headingBig", {
      duration: 1.5,
      scale: 2,
      delay: 0.8,
      transformOrigin: "top left",
      ease: "power2.inOut",
      yoyo: true,
      repeat: 1,
      repeatRefresh: true
    });

    // Banner Design Text
    gsap.to("#headingSmall", {
      delay: 1.2,
      opacity: 0
    });
    gsap.to("#headingSmall", {
      delay: 2,
      left: "-100vw"
    });
    gsap.to("#headingSmall", {
      delay: 3.6,
      duration: 1.8,
      left: 0,
      opacity: 1
    });

    // Banner Small Text
    gsap.to("#headingText", {
      delay: 1.2,
      opacity: 0
    });
    gsap.to("#headingText", {
      delay: 2,
      left: "-100vw"
    });
    gsap.to("#headingText", {
      delay: 3.6,
      duration: 1.8,
      left: 0,
      opacity: 1
    });

    // Company Section - Title
    gsap.set(".company-section .title, #compDescription", {
      opacity: 0,
      y: -200
    });
    gsap.to(".company-section .title, #compDescription", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".company-section",
        start: "top center",
        end: "center",
        markers: false
      }
    });

    // Company section - Image
    gsap.set(".compy-box", {
      opacity: 0,
      scale: 0
    });
    gsap.to(".compy-box", {
      duration: 1.6,
      delay: 0.1,
      opacity: 1,
      scale: 1,
      transformOrigin: "top right",
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".company-section",
        start: "top center",
        end: "center",
        markers: false
      }
    });

    // Designers section - Title
    gsap.set(".designer-section .title, #designDescription", {
      y: -200,
      opacity: 0
    });
    gsap.to(".designer-section .title, #designDescription", {
      duration: 1.6,
      y: 0,
      opacity: 1,
      ease: "power2.inOut",
      yoyo: true,
      scrollTrigger: {
        trigger: ".designer-section",
        start: "top center",
        end: "center",
        markers: false
      }
    });

    // Designer section - white border
    gsap.set(".box-border", {
      opacity: 0,
      scale: 0.6,
      rotate: 15
    });
    gsap.to(".box-border", {
      duration: 1.5,
      opacity: 1,
      scale: 1,
      rotate: 0,
      ease: "power.inOut",
      yoyo: true,
      scrollTrigger: {
        trigger: ".designer-section",
        start: "top center",
        end: "center",
        markers: false
      }
    });

    // Designer section - Image - left
    gsap.set(".team1, .team3", {
      opacity: 0,
      rotate: 45,
      scale: 0.5
    });
    gsap.to(".team1, .team3", {
      duration: 1.6,
      delay: 0.2,
      opacity: 1,
      rotate: 0,
      scale: 1,
      ease: "power2.inOut",
      transformOrigin: "top",
      yoyo: true,
      scrollTrigger: {
        trigger: ".designer-section",
        start: "top center",
        end: "center",
        markers: false
      }
    });
    // right
    gsap.set(".team2", {
      opacity: 0,
      rotate: -45,
      scale: 0.5
    });
    gsap.to(".team2", {
      duration: 1.6,
      delay: 0.2,
      opacity: 1,
      rotate: 0,
      scale: 1,
      ease: "power2.inOut",
      transformOrigin: "top",
      yoyo: true,
      scrollTrigger: {
        trigger: ".designer-section",
        start: "top center",
        end: "center",
        markers: false
      }
    });

    // Projects section - Title
    gsap.set(".projects-section .title", {
      y: -200,
      opacity: 0
    });
    gsap.to(".projects-section .title", {
      duration: 1.6,
      y: 0,
      opacity: 1,
      ease: "power2.inOut",
      yoyo: true,
      scrollTrigger: {
        trigger: ".projects-section",
        start: "top center",
        end: "center",
        markers: false
      }
    });

    // Projects section - Left
    gsap.set(".pbox-left", {
      opacity: 0,
      x: -800
    });
    gsap.to(".pbox-left", {
      duration: 1.6,
      x: 0,
      opacity: 1,
      scale: 1,
      ease: "power2.inOut",
      yoyo: true,
      scrollTrigger: {
        trigger: ".projects-section",
        start: "top center",
        end: "center",
        markers: false
      }
    });

    // Projecr section - Right
    gsap.set(".pbox-right", {
      x: 500
    });
    gsap.to(".pbox-right", {
      duration: 1.6,
      x: 0,
      ease: "power2.inOut",
      yoyo: true,
      scrollTrigger: {
        trigger: ".projects-section",
        start: "top center",
        end: "center"      }
    });

    // Project section - content section
    gsap.set(".project-content", {
      x: -200,
      y: -200,
      opacity: 0
    });
    gsap.to(".project-content", {
      duration: 1.6,
      x: 0,
      y: 0,
      opacity: 1,
      delay: 0.2,
      ease: "power2.inOut",
      yoyo: true,
      scrollTrigger: {
        trigger: ".projects-section",
        start: "top center",
        end: "center",
        markers: false
      }
    });

    // Testimonial section - Title
    gsap.set(".testimonial-section .title", {
      y: -200,
      opacity: 0
    });
    gsap.to(".testimonial-section .title", {
      duration: 1.6,
      y: 0,
      opacity: 1,
      ease: "power2.inOut",
      yoyo: true,
      scrollTrigger: {
        trigger: ".testimonial-section",
        start: "top center",
        end: "center",
        markers: false
      }
    });

    // Testimonial section - Left Content
    gsap.set(".left-row", {
      opacity: 0,
      xPercent: -100
    });
    gsap.to(".left-row", {
      duration: 1.6,
      opacity: 1,
      xPercent: 0,
      ease: "power2.inOut",
      yoyo: true,
      scrollTrigger: {
        trigger: ".testimonial-section",
        start: "top center",
        end: "center",
        markers: false
      }
    });

    // Testimonial section - Right Content
    gsap.set(".right-row", {
      opacity: 0,
      xPercent: 100
    });
    gsap.to(".right-row", {
      duration: 1.6,
      opacity: 1,
      xPercent: 0,
      ease: "power2.inOut",
      yoyo: true,
      scrollTrigger: {
        trigger: ".testimonial-section",
        start: "top center",
        end: "center",
        markers: false
      }
    });

    // Contact section - Box & Border
    gsap.set(".contact-box, .contact-border", {
      opacity: 0,
      scale: 0
    });
    gsap.to(".contact-box, .contact-border", {
      duration: 1.6,
      opacity: 1,
      scale: 1,
      transformOrigin: "top right",
      ease: "power2.inOut",
      yoyo: true,
      scrollTrigger: {
        trigger: ".contact-us",
        start: "top center",
        end: "bottom",
        markers: false
      }
    });
  }

}
