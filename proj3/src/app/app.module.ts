import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { ViewComponent } from './components/view/view.component';
import { MovieComponent } from './components/movie/movie.component';
import { MovieService } from './service/movie.service';

@NgModule({
  declarations: [ //ovde se deklarisu sve komponente
    AppComponent,
    HeaderComponent,
    ContentComponent,
    ViewComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [MovieService], // ovde se deklarisu servisi
  bootstrap: [AppComponent]
})
export class AppModule { }
