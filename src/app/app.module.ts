import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ItemsComponent } from './components/items/items.component';
import { SingleItemComponent } from './components/single-item/single-item.component';
import { RatingComponent } from './components/rating/rating.component';
import { GoBackComponent } from './components/go-back/go-back.component';

const appRoutes: Routes =[
  { path: 'kategoria/:cat',      component: ItemsComponent, data:{ animation: 'category' }},
  { path: 'yerba/:id',      component: SingleItemComponent, data:{ animation: 'isRight' }},
  { path: '',
    redirectTo: 'kategoria/wszystko',
    pathMatch: 'full',
  },
  // { path: '**', component: PageNotFoundComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ItemsComponent,
    SingleItemComponent,
    RatingComponent,
    GoBackComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
