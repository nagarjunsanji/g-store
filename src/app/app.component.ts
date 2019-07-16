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

    this.pwa.promptEvent.userChoice
    .then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        alert('User accepted the A2HS prompt');
      } else {
        alert('User dismissed the A2HS prompt');
      }
      this.pwa.promptEvent = null;
    });
  }

  

}
