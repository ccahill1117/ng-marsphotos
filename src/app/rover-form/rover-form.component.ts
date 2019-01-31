import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { MarsRoverApiPhotosService } from '../mars-rover-api-photos.service'

@Component({
  selector: 'app-rover-form',
  templateUrl: './rover-form.component.html',
  styleUrls: ['./rover-form.component.css'],
  providers: [ MarsRoverApiPhotosService ]
})
export class RoverFormComponent implements OnInit {
  photos: any[] = null;

  constructor(private marsRoverApiPhotosService: MarsRoverApiPhotosService) { }

  getRoverImages(date: string, camera: string) {
    this.marsRoverApiPhotosService.getByDateAndCamera(date, camera).subscribe(response => {
      this.photos = response.json();
    });
  }

  ngOnInit() {
  }

}
