import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { IonContent } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  menuOutline, closeOutline, downloadOutline,
  logoGithub, mailOutline, locationOutline,
  cafeOutline, flashOutline, logoPython, logoNodejs, serverOutline, server,
  globeOutline, flameOutline, analyticsOutline, calculatorOutline,
  barChartOutline, searchOutline, cubeOutline, sendOutline, peopleOutline,
  arrowForward, chevronDown, briefcaseOutline, schoolOutline, codeSlash,
  callOutline, shieldCheckmark,
} from 'ionicons/icons';

import { NavbarComponent }    from '../components/navbar/navbar.component';
import { HeroComponent }      from '../components/hero/hero.component';
import { AboutComponent }     from '../components/about/about.component';
import { ExperienceComponent } from '../components/experience/experience.component';
import { StackComponent }     from '../components/stack/stack.component';
import { ProjectsComponent }  from '../components/projects/projects.component';
import { ContactComponent }   from '../components/contact/contact.component';
import { FooterComponent }    from '../components/footer/footer.component';
import { DataService }        from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    IonContent,
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    ExperienceComponent,
    StackComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
  ],
})
export class HomePage {
  @ViewChild(IonContent) content!: IonContent;

  education   = this.data.getEducation();
  experiences = this.data.getExperiences();
  stack       = this.data.getStack();
  projects    = this.data.getProjects();

  constructor(private data: DataService) {
    addIcons({
      menuOutline, closeOutline, downloadOutline,
      logoGithub, mailOutline, locationOutline,
      cafeOutline, flashOutline, logoPython, logoNodejs, serverOutline, server,
      globeOutline, flameOutline, analyticsOutline, calculatorOutline,
      barChartOutline, searchOutline, cubeOutline, sendOutline, peopleOutline,
      arrowForward, chevronDown, briefcaseOutline, schoolOutline, codeSlash,
      callOutline, shieldCheckmark,
    });
  }

  async scrollToSection(sectionId: string) {
    const el = document.getElementById(sectionId);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.pageYOffset - 64;
    await this.content.scrollToPoint(0, y, 700);
  }
}
