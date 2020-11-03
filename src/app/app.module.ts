import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppGuard } from './app.guard';
import { AppService } from './app.service';

import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';

@NgModule({
  declarations: [ AppComponent ],
  imports: [ BrowserModule, AppRoutingModule, BrowserAnimationsModule,
            HttpClientModule, NgxMaterialTimepickerModule ],
  providers: [ AppService, AppGuard ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
