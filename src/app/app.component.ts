import { Component } from '@angular/core';

@Component({
  selector: 'gs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'g-store';

  constructor() {

  }

  installPwa(): void {
    console.log('installPwa');
  }

}
