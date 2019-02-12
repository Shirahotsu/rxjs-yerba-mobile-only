import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slider } from './animations/router-animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    slider
  ]


})
export class AppComponent {
  title = 'yerbaRxJs';
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
//   onActivate(event) {
//       window.scroll(0,0);
// }
}
