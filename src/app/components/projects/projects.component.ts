import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { logoGithub, arrowForward, flashOutline, shieldCheckmark } from 'ionicons/icons';
import { Project, ProjectCategory } from '../../interfaces/portfolio.interface';

type Filter = 'all' | ProjectCategory;

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TranslateModule, IonIcon],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  @Input() projects: Project[] = [];

  filters: { key: Filter; labelKey: string }[] = [
    { key: 'all',       labelKey: 'projects.filter.all' },
    { key: 'fullstack', labelKey: 'projects.filter.fullstack' },
    { key: 'data',      labelKey: 'projects.filter.data' },
    { key: 'web',       labelKey: 'projects.filter.web' },
  ];

  activeFilter: Filter = 'all';
  filtered: Project[] = [];

  constructor() {
    addIcons({ logoGithub, arrowForward, flashOutline, shieldCheckmark });
  }

  ngOnInit() {
    this.filtered = this.projects;
  }

  setFilter(f: Filter) {
    this.activeFilter = f;
    this.filtered = f === 'all'
      ? this.projects
      : this.projects.filter(p => p.category === f);
  }
}
