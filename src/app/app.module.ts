import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MapaSpComponent } from './mapa-sp/mapa-sp.component';
import { RouterModule } from '@angular/router';
import { MapaPrComponent } from './mapa-pr/mapa-pr.component';
import { MapaScComponent } from './mapa-sc/mapa-sc.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    MapaSpComponent,
    MapaPrComponent,
    MapaScComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'sp', component: MapaSpComponent},
      {path: 'pr', component: MapaPrComponent},
      {path: 'rj', component: MapaScComponent},
      {path: '', redirectTo: '/sp', pathMatch: 'full'},
    ]),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC0V63C-oBkLq6HLW82uyEldxkVMA8x_Rc',
      libraries: ['places']
    }),
    // GoogleMapsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
