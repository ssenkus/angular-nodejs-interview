import {Component, OnInit} from '@angular/core';
import {transition, trigger, useAnimation} from '@angular/animations';

import {slideFadeOut, useSlideFadeInAnimation} from './animations/animations';
import {
  bounceInAndOut,
  enterAndLeaveFromLeft,
  enterAndLeaveFromRight,
  fadeInAndOut,
  fadeInThenOut,
  growInShrinkOut,
  swingInAndOut
} from './animations/triggers';

@Component({
  selector: 'app-animation-example',
  templateUrl: './animation-example.component.html',
  styleUrls: ['./animation-example.component.scss'],
  animations: [
    // The following are pre-built triggers - Use these to add animations with the least work
    growInShrinkOut, fadeInThenOut, swingInAndOut, fadeInAndOut,
    enterAndLeaveFromLeft, enterAndLeaveFromRight, bounceInAndOut,

    // The following is a custom trigger using animations from the package
    // Use this approach if you need to customize the animation or use your own states
    trigger('enterFromLeftLeaveToRight', [
      // this transition uses a function that returns an animation with custom parameters
      transition(':enter', useSlideFadeInAnimation('300ms', '20px')),
      // This transition uses useAnimation and passes the parameters directly - accomplishing the same thing as the above function
      transition(':leave', useAnimation(slideFadeOut, {params: {time: '2000ms', endPos: '100px'}})),
    ]),
  ],
})
export class AnimationExampleComponent implements OnInit {

  selectedAnimation = 'fade';
  numbers: number[] = [];
  count = 0;

  constructor() {
  }

  ngOnInit() {
    setInterval(() => {
      this.add();
    }, 1000);

  }

  add() {
    this.numbers = [this.numbers.length, ...this.numbers];
    this.count = this.numbers.length;
  }

  remove() {
    this.numbers = this.numbers.splice(1, this.numbers.length);
    this.count = this.numbers.length;
  }

  replace() {
    this.numbers = [499 + this.count, ...this.numbers.splice(1, this.numbers.length)];
  }

  changeAnimation(newAnimation: string) {
    this.selectedAnimation = newAnimation;
  }
}
