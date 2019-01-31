import { Component } from '@angular/core';
import * as firebase from "firebase";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  private user;

  constructor() {}

  ngDoCheck() {
    this.user = firebase.auth().currentUser;
  }
}
