import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { briefcaseOutline, codeSlash, schoolOutline } from 'ionicons/icons';
import { Experience } from 'src/app/interfaces/portfolio.interface';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent {
  @Input() experiences: Experience[] = [];

  constructor() {
    addIcons({ briefcaseOutline, codeSlash, schoolOutline });
  }

  getTypeIcon(type: Experience['type']): string {
    const icons: Record<Experience['type'], string> = {
      'freelance': 'code-slash',
      'full-time': 'briefcase-outline',
      'internship': 'school-outline',
    };
    return icons[type];
  }
}
