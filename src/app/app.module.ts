import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing-module';
import { OwlModule } from 'ngx-owl-carousel';
import { NgsRevealModule } from 'ng-scrollreveal';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PlacementTrainingComponent } from './placement-training/placement-training.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PlacementTrainingComponent
  ],
  imports: [
    NgsRevealModule.forRoot(),
    AppRoutingModule,
    BrowserModule,
    OwlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
