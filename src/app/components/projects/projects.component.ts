import { Component, Input, OnInit } from '@angular/core';
import { projects } from 'src/app/models/projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  skills = ['all', 'javascript', 'ui', 'backend', 'frontend'];

  id: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  public projects: any = projects;

   // filter button
  filterBtn(event: any) {
    const projectCards = projects;
    projectCards.forEach(card => {
      if (card.tags.includes(event.target.attributes.id.value)) {
        card.display = 'hide';
      } else {
        card.display = '';
      }
    });
    
    for (let e of event.target.parentElement.children) {
      e.attributes.class.value = 'filter-btn ng-star-inserted';
    }
    event.target.attributes.class.value += ' active';
  }


}
