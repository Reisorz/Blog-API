import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { FooterComponent } from './footer/footer.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideRouter } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ArticleListComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
