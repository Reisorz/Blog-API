import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { FooterComponent } from './footer/footer.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { AddArticleComponent } from './add-article/add-article.component';
import { FormsModule } from '@angular/forms';
import { ArticleViewComponent } from './article-view/article-view.component';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { ExploreComponent } from './explore/explore.component';
import { TagArticlesComponent } from './tag-articles/tag-articles.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ArticleListComponent,
    FooterComponent,
    AddArticleComponent,
    ArticleViewComponent,
    EditArticleComponent,
    ExploreComponent,
    TagArticlesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
