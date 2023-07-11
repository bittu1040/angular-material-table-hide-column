import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MatTableModule, MatCheckboxModule  } from '@angular/material';

@NgModule({
  imports:      [ ReactiveFormsModule, BrowserModule, FormsModule,MatCheckboxModule, MatTableModule, BrowserAnimationsModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
