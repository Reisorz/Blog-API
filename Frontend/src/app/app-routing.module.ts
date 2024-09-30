import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
import { AddArticleComponent } from './add-article/add-article.component';

const routes: Routes = [
  {path:'articles', component: ArticleListComponent},
  {path:'', redirectTo: 'articles', pathMatch:'full'},
  {path:'add-article', component: AddArticleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
