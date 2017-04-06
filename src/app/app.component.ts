import {Component, ViewContainerRef} from '@angular/core';

@Component({
  ////moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {

  public constructor(private viewContainerRef:ViewContainerRef) {
    this.viewContainerRef = viewContainerRef;
  }

}
