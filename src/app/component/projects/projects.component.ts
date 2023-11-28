import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  @Input()
  title: string = ''
  @Input()
  imageUrl: string = ''
  @Input()
  imageAlt: string = ''
  @Input()
  linkAcesso: string = ''
  @Input()
  linkRepo: string = ''

  constructor(){}
  ngOnInit(): void { }

}
