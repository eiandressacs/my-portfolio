import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.pages.html',
  styleUrls: ['./about.pages.css']
})
export class AboutComponent implements OnInit{

  imagePath: string = '/assets/container-tag.png'
  imageAlt: string = 'Imagem ilustrativa do sobre'
  constructor(){}
  ngOnInit(): void {
  }
}
