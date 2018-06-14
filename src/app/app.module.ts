import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LayoutModule} from '@angular/cdk/layout';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';

import {NavBarComponent} from './nav-bar/nav-bar.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FooterComponent} from './footer/footer.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { ListAlimentComponent } from './list-aliment/list-aliment.component';
import { GlycemicLoadComponent } from './glycemic-load/glycemic-load.component';
import { HistoryMealsComponent } from './history-meals/history-meals.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ContactUsComponent,


    FooterComponent,

    ListAlimentComponent,

    GlycemicLoadComponent,

    HistoryMealsComponent


    FooterComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    FormsModule,
    MatSidenavModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
