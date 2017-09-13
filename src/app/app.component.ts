import { Component } from '@angular/core';

declare var pageReLoaded: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadpage() {
      new pageReLoaded();
    }
}


