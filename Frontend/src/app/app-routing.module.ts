import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { ArticleViewComponent } from './article-view/article-view.component';

const routes: Routes = [
  {path:'articles', component: ArticleListComponent},
  {path:'', redirectTo: 'articles', pathMatch:'full'},
  {path:'add-article', component: AddArticleComponent},
  {path:'view-article/:id', component: ArticleViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
