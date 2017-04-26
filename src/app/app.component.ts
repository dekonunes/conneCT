import {Component, ViewContainerRef} from '@angular/core';
import {Router, NavigationEnd} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {

  public constructor(
    private viewContainerRef:ViewContainerRef,
    public router: Router) {
      this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        ga('set', 'page', event.urlAfterRedirects);
        ga('send', 'pageview');
      }
    });
    this.viewContainerRef = viewContainerRef;
  }

}
