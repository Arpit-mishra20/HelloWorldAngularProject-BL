import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

const routes: Routes = [];
@NgModule({
  declarations:[
    AppComponent
  ],

  imports: [AppRoutingModule,
    BrowserModule,
    FormsModule
  ],
  providers:[],
  bootstrap:[AppComponent]

})
export class AppRoutingModule { }