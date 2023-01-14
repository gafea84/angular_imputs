import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListaNumerosComponent } from './components/lista-numeros/lista-numeros.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaNumerosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
