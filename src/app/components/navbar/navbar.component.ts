import { Component, Output, EventEmitter, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { menuOutline, closeOutline, downloadOutline } from 'ionicons/icons';
import { LanguageService } from '../../services/language.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, TranslateModule, IonIcon],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Output() scrollToSection = new EventEmitter<string>();

  readonly langService = inject(LanguageService);
  readonly dataService = inject(DataService);

  navLinks = this.dataService.getNavLinks();
  mobileOpen = false;
  scrolled = false;

  constructor() {
    addIcons({ menuOutline, closeOutline, downloadOutline });
  }

  onScroll(scrollTop: number) {
    this.scrolled = scrollTop > 40;
  }

  navigate(sectionId: string) {
    this.scrollToSection.emit(sectionId);
    this.mobileOpen = false;
  }

  toggleMobile() {
    this.mobileOpen = !this.mobileOpen;
  }
}
