import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  	<h1>App</h1>
  	<nav>
      <a routerLink="/bubble" routerLinkActive="active">Bubble</a>
      <a routerLink="/custom" routerLinkActive="active">Custom</a>
      <a routerLink="/both" routerLinkActive="active">Both</a>
      <a routerLink="/both/stop" routerLinkActive="active">Both-Stop</a>
    </nav>
    <div>
    	<router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {
  title = 'app';
}
