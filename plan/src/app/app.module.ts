import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { VocibilancioComponent } from './vocibilancio/vocibilancio.component';
import { NewvocebilancioComponent } from './newvocebilancio/newvocebilancio.component';
//import { VocibilanciomasterComponent } from './vocibilanciomaster/vocibilanciomaster.component';
import { HttpClientModule }  from '@angular/common/http';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    VocibilancioComponent,
    NewvocebilancioComponent,
    //VocibilanciomasterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
