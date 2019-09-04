import { Component } from '@angular/core';

@Component({
  selector: 'gs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'g-store';
  promptEvent;

  constructor() {
    window.addEventListener('beforeinstallprompt', event => {
      console.log('invoked beforeinstallprompt ',event);

      this.promptEvent = event;
    });
  }

  installPwa(): void {
    console.log('installPwa');
    console.log(this.promptEvent);
  }

}
