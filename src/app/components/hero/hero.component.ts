import { Component, Output, EventEmitter, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowForward, chevronDown, locationOutline } from 'ionicons/icons';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, TranslateModule, IonIcon],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit, OnDestroy {
  @Output() scrollToSection = new EventEmitter<string>();

  private translate = inject(TranslateService);

  roles: string[] = [];
  private langSub: any = null;

  constructor() {
    addIcons({ arrowForward, chevronDown, locationOutline });
  }

  ngOnInit() {
    this.loadRoles();
    this.langSub = this.translate.onLangChange.subscribe(() => this.loadRoles());
  }

  ngOnDestroy() {
    if (this.langSub) this.langSub.unsubscribe();
  }

  private loadRoles() {
    this.translate.get('hero.roles').subscribe((roles: string[]) => {
      this.roles = Array.isArray(roles) ? roles : [];
    });
  }
}
