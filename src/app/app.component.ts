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
    console.log('before beforeinstallprompt ',event);

    window.addEventListener('beforeinstallprompt', event => {
      console.log('invoked beforeinstallprompt ',event);
      event.preventDefault();
      this.promptEvent = event;
    });

    window.addEventListener('appinstalled', (evt) => {
      console.log("appinstalled successfully");
    });
  }

  installPwa(): void {
    console.log('installPwa method ');
    console.log(this.promptEvent);
    if(this.promptEvent !== undefined) {
      // The user has had a postive interaction with our app and Chrome
      // has tried to prompt previously, so let's show the prompt.
      this.promptEvent.prompt();

      // Follow what the user has done with the prompt.
      this.promptEvent.userChoice.then(function(choiceResult) {

        console.log(choiceResult.outcome);

        if(choiceResult.outcome == 'dismissed') {
          console.log('App cancelled home screen install');
        }
        else {
          console.log('App added to home screen');
        }

        // We no longer need the prompt.  Clear it up.
        this.promptEvent = null;
      });
    }
  }

}
