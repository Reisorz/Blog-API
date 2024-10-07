import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from './article';
import { Observable, retryWhen } from 'rxjs';
import { Tag } from './tag';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  private urlBase = "http://localhost:8080/blog-app/tags";

  constructor(private clientHttp: HttpClient) { }

  getTagList(): Observable<Tag[]> {
    return this.clientHttp.get<Tag[]>(this.urlBase);
  }

  getArticleList(tagId: number): Observable<Article[]> {
    return this.clientHttp.get<Article[]>(`${this.urlBase}/tag-articles/${tagId}`)
  }

  getTagById(tagId: number): Observable<Tag> {
    return this.clientHttp.get<Tag>(`${this.urlBase}/view-tag/${tagId}`)
  }
}
