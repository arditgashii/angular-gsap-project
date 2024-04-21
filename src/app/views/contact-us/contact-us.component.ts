import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { TimelineLite } from 'gsap';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements AfterViewInit {

  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit() {
    const btn = this.elementRef.nativeElement.querySelector(".button_wrapper");
    const cBtn = this.elementRef.nativeElement.querySelector(".button-container");
    const main = this.elementRef.nativeElement.querySelector("main");
    const tl = new TimelineLite();

    if (btn && cBtn && main) {
      btn.addEventListener("click", () => {
        btn.classList.add("opa");

        setTimeout(() => {
          cBtn.style.display = "none";
        }, 500);

        setTimeout(() => {
          main.classList.add("mainShow");
        }, 500);

        tl
          .from(".lets", 0.3, { x: -500, autoAlpha: 0 })
          .from(".message", 0.3, { x: 500, autoAlpha: 0 })
          .from("main h1", 0.3, { x: -500, autoAlpha: 0 })
          .from("main h3", 0.3, { x: 500, autoAlpha: 0 })
          .from("p", 0.3, { y: 500, autoAlpha: 0 })
          .from(".message .content", 0.3, { autoAlpha: 0 })
          .staggerFromTo("input, textarea, button", 0.3, { y: -300, autoAlpha: 0 }, { y: 0, autoAlpha: 1 }, 0.2);
      });
    }
  }

  handleClick(event: Event) {
    event.preventDefault(); // Prevent default action of anchor tag
  }
}
