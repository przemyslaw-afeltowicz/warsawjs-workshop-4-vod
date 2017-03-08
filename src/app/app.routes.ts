import {HomeComponent} from "./components/home/home.component";
import {Routes} from "@angular/router";
import {MoviesComponent} from "./components/movies/movies.component";

export const appRoutes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "movies", component: MoviesComponent },
  { path: "", component: MoviesComponent }
];
