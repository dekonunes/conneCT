import { Component } from '@angular/core';
import { MdDialog } from '@angular/material';

import { CreditsComponent } from '../footer/credits/credits.component';

@Component({
  selector: 'rb-header-login',
  templateUrl: './header-login.component.html',
  styleUrls: ['./header-login.component.css'],
})
export class HeaderLoginComponent {

  constructor(
    private dialog: MdDialog
  ) { }

  openDialogCredits() {
    this.dialog.open(CreditsComponent);
  }


}
