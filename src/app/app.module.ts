import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {RouterModule} from "@angular/router";
import {appRoutes} from "./app.routes";
import { MoviesComponent } from './components/movies/movies.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { SearchComponent } from './components/search/search.component';
import {AngularFireModule} from "angularfire2";
import {firebaseConfig} from "./utils/firebase.config";
import { IframeComponent } from './components/iframe/iframe.component';
import { SafePipe } from './safe.pipe';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoviesComponent,
    MoviesListComponent,
    SearchComponent,
    IframeComponent,
    SafePipe,
    AddMovieComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
