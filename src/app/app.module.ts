import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LayoutModule} from '@angular/cdk/layout';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FooterComponent} from './footer/footer.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {RouterModule, Routes} from '@angular/router';
import {MyProfileComponent} from './my-profile/my-profile.component';
import {FavoriteMealsComponent} from './favorite-meals/favorite-meals.component';
import {GlycemicLoadComponent} from './glycemic-load/glycemic-load.component';
import {ListAlimentComponent} from './list-aliment/list-aliment.component';
import {HistoryMealsComponent} from './history-meals/history-meals.component';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule,
} from '@angular/material';
import {AuthentificationComponent} from './authentification/authentification.component';


const routes: Routes = [
  {path: 'contact', component: ContactUsComponent},
  {path: 'myprofile', component: MyProfileComponent},
  {path: 'favorite-meals', component: FavoriteMealsComponent},
  {path: 'glycemic-load', component: GlycemicLoadComponent},
  {path: 'history-meals', component: HistoryMealsComponent},
  {path: 'list-aliment', component: ListAlimentComponent},
  {path: '', component: AuthentificationComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ContactUsComponent,
    FooterComponent,
    MyProfileComponent,
    FavoriteMealsComponent,
    ListAlimentComponent,
    GlycemicLoadComponent,
    HistoryMealsComponent,
    AuthentificationComponent,

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
    RouterModule.forRoot(routes),


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
