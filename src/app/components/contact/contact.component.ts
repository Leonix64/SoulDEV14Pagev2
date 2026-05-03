import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { mailOutline, logoGithub, locationOutline, callOutline, arrowForward } from 'ionicons/icons';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, TranslateModule, IonIcon],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  readonly email    = 'hugogurrola49@gmail.com';
  readonly phone    = '618 369 5888';
  readonly github   = 'https://github.com/HugoGurrola';
  readonly location = 'Durango, Mexico';

  constructor() {
    addIcons({ mailOutline, logoGithub, locationOutline, callOutline, arrowForward });
  }
}
