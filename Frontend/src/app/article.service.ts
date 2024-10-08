import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from './article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private urlBase = "http://localhost:8080/blog-app/articles";

  constructor(private clientHttp: HttpClient) { }

  getArticleList(): Observable<Article[]> {
    return this.clientHttp.get<Article[]>(this.urlBase);
  }

  addArticle (article: Article): Observable<Article> {
    return this.clientHttp.post<Article>(this.urlBase, article);
  }

  getArticleById(articleId: number) {
    return this.clientHttp.get<Article>(`${this.urlBase}/view-article/${articleId}`);
  }

  editArticle(articleId: number, article: Article): Observable<Article> {
    return this.clientHttp.put<Article>(`${this.urlBase}/edit-article/${articleId}`, article);
  }

  deleteArticle(articleId: number): Observable<Object> {
    return this.clientHttp.delete(`${this.urlBase}/delete-article/${articleId}`)
  }

}
