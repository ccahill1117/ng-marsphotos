import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
// import { AlbumsComponent } from './albums/albums.component';
import { AboutComponent } from './about/about.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlbumDetailComponent } from './album-detail/album-detail.component';

import { masterFirebaseConfig } from './api-keys';
import { nasaKey } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AdminComponent } from './admin/admin.component';
import { EditAlbumComponent } from './edit-album/edit-album.component';
import { RoverFormComponent } from './rover-form/rover-form.component';
import { PhotosListComponent } from './photos-list/photos-list.component';
import { UserPhotosListComponent } from './user-photos-list/user-photos-list.component';
import { AngularFireAuthModule } from 'angularfire2/auth';


export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket,
  messagingSenderId: masterFirebaseConfig.messagingSenderId
};

export const nasaConfig = {
  nasa: nasaKey.nasa,
}

@NgModule({
  declarations: [
    AppComponent,
    MarketplaceComponent,
    // AlbumsComponent,
    AboutComponent,
    WelcomeComponent,
    AlbumDetailComponent,
    AdminComponent,
    EditAlbumComponent,
    RoverFormComponent,
    PhotosListComponent,
    UserPhotosListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
