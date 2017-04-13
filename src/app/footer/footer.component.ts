import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';

import { DisclosureComponent } from './disclosure/disclosure.component';
import { CreditsComponent } from './credits/credits.component';

@Component({
  selector: 'rb-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(
    private dialog: MdDialog
  ) { }

  ngOnInit() {
  }

  openDialogDisclosure() {
    this.dialog.open(DisclosureComponent);
  }

  openDialogCredits() {
    this.dialog.open(CreditsComponent);
  }

}
