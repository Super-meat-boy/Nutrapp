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
<<<<<<< HEAD
import {ContactUsComponent} from './contact-us/contact-us.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

=======
import { FooterComponent } from './footer/footer.component';
<<<<<<< HEAD
import {FlexLayoutModule} from '@angular/flex-layout';
=======
>>>>>>> bbacfbefcd70620a24e9a43ced0a90f4609a4cb5
>>>>>>> c3d83c54cef26bc4c356b13efdbdd2550f04e200

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
<<<<<<< HEAD
    ContactUsComponent,

=======
    FooterComponent
>>>>>>> bbacfbefcd70620a24e9a43ced0a90f4609a4cb5
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
<<<<<<< HEAD
    FlexLayoutModule,
=======
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    FormsModule,
    MatSidenavModule,
>>>>>>> c3d83c54cef26bc4c356b13efdbdd2550f04e200

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
