import { Component, OnInit } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const open = document.querySelector('.container')!;
    const close = document.querySelector('.close')!;
    const tl = gsap.timeline({ defaults: { duration: 1, ease: 'expo.inOut' } });

    open.addEventListener('click', () => {
      if (tl.reversed()) {
        tl.play();
      } else {
        tl.to('nav', { right: 0 })
          .to('nav', { height: '100vh' }, '-=.1')
          .to('nav ul li a', { opacity: 1, pointerEvents: 'all', stagger: 0.2 }, '-=.8')
          .to('.close', { opacity: 1, pointerEvents: 'all' }, '-=.8')
          .to('nav h2', { opacity: 1 }, '-=1');
        document.body.classList.add('hidden-content');  // Hide content
      }
    });

    close.addEventListener('click', () => {
      tl.reverse();
      document.body.classList.remove('hidden-content');  // Show content
    });
  }
}
