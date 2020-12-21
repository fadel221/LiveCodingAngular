import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { BiensComponent } from './Components/biens/biens.component';
import { AddBiensComponent } from './Components/biens/add-biens/add-biens.component';
import { DetailBiensComponent } from './Components/biens/detail-biens/detail-biens.component';
import { ListeBiensComponent } from './Components/biens/liste-biens/liste-biens.component';
import { ItemBienComponent } from './Components/biens/liste-biens/item-bien/item-bien.component';
import { JumbotronBiensComponent } from './Components/biens/jumbotron-biens/jumbotron-biens.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BiensComponent,
    AddBiensComponent,
    DetailBiensComponent,
    ListeBiensComponent,
    ItemBienComponent,
    JumbotronBiensComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
