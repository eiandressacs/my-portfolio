import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-repositorio',
  templateUrl: './repositorio.component.html',
  styleUrls: ['./repositorio.component.css']
})
export class RepositorioComponent implements OnInit {

  @Input()
  title: string = 'Wiki South Park'
  @Input()
  imageUrl: string = 'https://user-images.githubusercontent.com/123520478/271847885-84f9816a-2962-4641-a279-ae4a3a0a17b6.png'
  @Input()
  imageAlt: string = 'Imagem projeto website South Park'
  @Input()
  linkAcesso: string = 'https://eiandressacs.github.io/website-south-park/'
  @Input()
  linkRepo: string = 'https://github.com/eiandressacs/website-south-park'
  ngOnInit(): void {

  }

}
