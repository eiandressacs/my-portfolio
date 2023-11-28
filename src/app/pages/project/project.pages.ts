import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.pages.html',
  styleUrls: ['./project.pages.css']
})
export class ProjectComponent implements OnInit {
  imageSrc: string = './assets/ServicePhoto.png';

  lerMais = true;

  ngOnInit(): void {}

  toggleTexto() {
    this.lerMais = !this.lerMais;
  }

}


