import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { ArticleViewComponent } from './article-view/article-view.component';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { ExploreComponent } from './explore/explore.component';
import { TagArticlesComponent } from './tag-articles/tag-articles.component';

const routes: Routes = [
  {path:'articles', component: ArticleListComponent},
  {path:'', redirectTo: 'articles', pathMatch:'full'},
  {path:'add-article', component: AddArticleComponent},
  {path:'view-article/:id', component: ArticleViewComponent}, 
  {path:'edit-article/:id', component: EditArticleComponent},
  {path:'explore', component: ExploreComponent},
  {path:'tag-articles/:id', component: TagArticlesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
