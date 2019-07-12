import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class PwaService {
  promptEvent;
  
  constructor(private swUpdate: SwUpdate) {
    console.log('PWA invoked');
    swUpdate.available.subscribe(event => {
      //if (askUserToUpdate()) {
        window.location.reload();
      //}
    });

    window.addEventListener('beforeinstallprompt', event => {
      this.promptEvent = event;
    });
  }
}
