import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppNavbarComponent } from './includes/app-navbar/app-navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GfAutocompleteModule } from '@generafi/gf-autocomplete';
import { GfCommonModule } from '@generafi/common';
// import { GfFormMainModule } from '@generafi/gf-form-main';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HttpCacheInterceptorModule } from '@ngneat/cashew';
import { AutoCompleteComponent } from './pages/auto-complete/auto-complete.component';
import { RouterModule, Routes } from '@angular/router';
import { TableWithPopupComponent } from './pages/table-with-popup/table-with-popup.component';

import { GfPopUpModule } from '@generafi/gf-popup';
import { GfTableLinkPopUpModule } from '@generafi/gf-table-link-popup';

const routes: Routes = [
  { path: '', redirectTo: '/auto-complete', pathMatch: 'full' },
  { path: 'auto-complete', component: AutoCompleteComponent },
  { path: 'table-link-popup', component: TableWithPopupComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    AutoCompleteComponent,
    TableWithPopupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    GfAutocompleteModule,
    GfCommonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpCacheInterceptorModule.forRoot({
      ttl: 60000 // Cache lifetime in milliseconds (e.g., 1 minute)
    }),
    RouterModule.forRoot(routes),
    GfPopUpModule,
    GfTableLinkPopUpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
