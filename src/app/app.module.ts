import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArtworkComponent } from './artwork/artwork.component';
import { ArToolkitService } from './services/ar-toolkit.service';

@NgModule({
  declarations: [
    AppComponent,
    ArtworkComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ArToolkitService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
