import { Component, Input, OnInit } from '@angular/core';
import { AlbumService } from '../album.service';
import * as firebase from "firebase";

@Component({
  selector: 'app-edit-album',
  templateUrl: './edit-album.component.html',
  styleUrls: ['./edit-album.component.css'],
  providers: [AlbumService]
})
export class EditAlbumComponent implements OnInit {
  @Input() selectedAlbum;

  private user;

  ngDoCheck() {
    this.user = firebase.auth().currentUser;
  }

  constructor(private albumService: AlbumService) { }

  ngOnInit() {
  }

  beginUpdatingAlbum(albumToUpdate){
    this.albumService.updateAlbum(albumToUpdate);
  }

}
