import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { MarsRoverApiPhotosService } from '../mars-rover-api-photos.service'
import { PhotoService } from '../photo.service';
import * as firebase from "firebase";

@Component({
  selector: 'app-rover-form',
  templateUrl: './rover-form.component.html',
  styleUrls: ['./rover-form.component.css'],
  providers: [ MarsRoverApiPhotosService, PhotoService ]
})
export class RoverFormComponent implements OnInit {
  private user;
  ngDoCheck() {
    this.user = firebase.auth().currentUser;
  }

  photos: any[] = null;

  constructor(private marsRoverApiPhotosService: MarsRoverApiPhotosService) { }

  getRoverImages(date: string, camera: string) {
    this.marsRoverApiPhotosService.getByDateAndCamera(date, camera).subscribe(response => {
      this.photos = response.json();
    });
  }

  saveRoverImages(date, camera){
    this.marsRoverApiPhotosService.saveImages(date, camera);
    alert(`The images from ${date} taken by the ${camera} camera have been saved to the database.`)
  }

  ngOnInit() {
  }

}
