import { Injectable, signal, computed } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Lang } from '../interfaces/portfolio.interface';

const STORAGE_KEY = 'portfolio_lang';

@Injectable({ providedIn: 'root' })
export class LanguageService {

  private _lang = signal<Lang>(this.getInitialLang());

  readonly currentLang = computed(() => this._lang());
  readonly isEnglish = computed(() => this._lang() === 'en');

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['en', 'es']);
    this.translate.setDefaultLang('en');
    this.translate.use(this._lang());
  }

  toggle(): void {
    const next: Lang = this._lang() === 'en' ? 'es' : 'en';
    this._lang.set(next);
    this.translate.use(next);
    localStorage.setItem(STORAGE_KEY, next);
  }

  setLang(lang: Lang): void {
    this._lang.set(lang);
    this.translate.use(lang);
    localStorage.setItem(STORAGE_KEY, lang);
  }

  private getInitialLang(): Lang {
    const stored = localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (stored === 'en' || stored === 'es') return stored;
    return 'en';
  }
}
