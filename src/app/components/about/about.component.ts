import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { locationOutline, mailOutline, logoGithub, briefcaseOutline, schoolOutline } from 'ionicons/icons';
import { Education } from 'src/app/interfaces/portfolio.interface';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, TranslateModule, IonIcon],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  @Input() education: Education[] = [];

  constructor() {
    addIcons({ locationOutline, mailOutline, logoGithub, briefcaseOutline, schoolOutline });
  }
}
