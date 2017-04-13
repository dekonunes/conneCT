import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-disclosure',
  templateUrl: './disclosure.component.html',
  styleUrls: ['./disclosure.component.css']
})
export class DisclosureComponent {

  constructor(
    public dialogRef: MdDialogRef<DisclosureComponent>
  ) { }

}
