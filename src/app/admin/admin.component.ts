import { Component } from '@angular/core';
import { AlbumService } from '../album.service';
import { Album } from '../album.model';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [AlbumService, AuthenticationService]
})
export class AdminComponent {

  private isLoggedIn: Boolean = null;

  constructor(public authService: AuthenticationService, private albumService: AlbumService) {    this.authService.user.subscribe(user => {
      if (user == null) {
        this.isLoggedIn = false;
      } else {
        this.isLoggedIn = true;
      }
    });
  }

  ngOnInit() {
  }

  submitForm(title: string, artist: string, description: string) {
    var newAlbum: Album = new Album(title, artist, description);
    this.albumService.addAlbum(newAlbum);
  }

}
