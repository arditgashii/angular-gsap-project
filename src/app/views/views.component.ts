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

    document.addEventListener("DOMContentLoaded", () => {
      const tl = gsap.timeline({ defaults: { duration: 2, ease: "power3.inOut" } });

      // Animate the left image from the left
      tl.from(".hero-image.left .wrapper-img", {
        x: '-100%',
        opacity: 0,
        duration: 2.5,
        ease: "power3.out"
      });

      // Animate the right image from the right
      tl.from(".hero-image.right .wrapper-img", {
        x: '100%',
        opacity: 0,
        duration: 2.5,
        ease: "power3.out"
      }, "-=2.5");

      // Animate the center image scaling up
      tl.from(".hero-image.center .wrapper-img", {
        scale: 0,
        opacity: 0,
        duration: 4.5,
        ease: "elastic.out(1, 0.5)"
      }, "-=2.5");

      // Animate the letters with rotation, opacity, and y-axis translation
      tl.from(".letter", {
        rotationY: 286,
        opacity: 0,
        duration: 0.2,
        yPercent: -400,
        stagger: 0.1,
        ease: "Expo.easeOut"
      }, "-=3");
    });

    // ScrollTrigger animations
    gsap.utils.toArray('.container').forEach((container) => {
      const containerElement = container as HTMLElement; // Type assertion to HTMLElement

      ScrollTrigger.create({
        trigger: containerElement,
        start: "top top",
        end: "+=1000", // Adjust this value based on your content height
        onEnter: () => {
          gsap.to(containerElement.querySelectorAll('.wrapper-img, .letter'), {
            opacity: 0,
            y: 50,
            duration: 1,
            stagger: 0.1,
            ease: "power3.inOut"
          });
        },
        onLeaveBack: () => {
          gsap.to(containerElement.querySelectorAll('.wrapper-img, .letter'), {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power3.inOut"
          });
        },
        scrub: true,
      });
    });




    // Second Animation
    gsap.to(".container", {
      scrollTrigger: {
        trigger: ".container",
        start: "top 80%",
        end: "top 20%",
        scrub: true,
      },
      opacity: 1,
      y: 0,
      duration: 1.5,
    });
    
    // Additional animation for the text and image within the container
    gsap.from("#headingBig", {
      scrollTrigger: {
        trigger: ".container",
        start: "top 80%",
        end: "top 60%",
        scrub: true,
      },
      opacity: 0,
      x: -100,
      duration: 1,
    });
    
    gsap.from("#headingSmall", {
      scrollTrigger: {
        trigger: ".container",
        start: "top 75%",
        end: "top 55%",
        scrub: true,
      },
      opacity: 0,
      x: -100,
      duration: 1,
      delay: 0.2,
    });
    
    gsap.from("#headingText", {
      scrollTrigger: {
        trigger: ".container",
        start: "top 70%",
        end: "top 50%",
        scrub: true,
      },
      opacity: 0,
      x: -100,
      duration: 1,
      delay: 0.4,
    });
    
    gsap.from("#bannerBigimg", {
      scrollTrigger: {
        trigger: ".container",
        start: "top 65%",
        end: "top 45%",
        scrub: true,
      },
      opacity: 0,
      y: 100,
      duration: 1,
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
    end: "center",
  }
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

  }

}