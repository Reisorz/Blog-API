import { Component } from '@angular/core';
import { Article } from '../article';
import { ArticleService } from '../article.service';
import { Router } from 'express';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.css'
})
export class ArticleListComponent {

  articles: Article[];

  constructor(private articleService: ArticleService, private router: Router) {}

  ngOnInit() {
    this.getArticles();
  }

  getArticles() {
    this.articleService.getArticleList().subscribe((data => {this.articles = data}));
  }

}
