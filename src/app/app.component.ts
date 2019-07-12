import { Component } from '@angular/core';
import { PwaService } from './services/pwa/pwa.service';

@Component({
  selector: 'gs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'g-store';
  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));

  constructor(public pwa: PwaService) {}

  installPwa(): void {
    this.pwa.promptEvent.prompt();
  }

}
