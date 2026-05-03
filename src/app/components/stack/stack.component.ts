import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { IonIcon } from '@ionic/angular/standalone';
import { SkillCategory } from '../../interfaces/portfolio.interface';

@Component({
  selector: 'app-stack',
  standalone: true,
  imports: [CommonModule, TranslateModule, IonIcon],
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.scss'],
})
export class StackComponent {
  @Input() stack: SkillCategory[] = [];
}
