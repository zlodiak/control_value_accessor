import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CustomSelectComponent } from './components/custom-select/custom-select.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomSelectComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,  
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
