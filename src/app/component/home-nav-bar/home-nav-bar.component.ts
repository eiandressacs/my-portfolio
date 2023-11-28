import { Component, OnInit, HostListener  } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-home-nav-bar',
  templateUrl: './home-nav-bar.component.html',
  styleUrls: ['./home-nav-bar.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('1s', style({ opacity: 0 })),
      ]),
    ]),
  ],
})

export class HomeNavBarComponent implements OnInit{
  imagePath: string = '/assets/logoImg.jpg'
  imageAlt: string = 'Logo'

  constructor(){}
  ngOnInit(): void {
  }

}
