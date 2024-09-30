import { Component } from '@angular/core';
import { Article } from '../article';
import { ArticleService } from '../article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrl: './add-article.component.css'
})
export class AddArticleComponent {
  article: Article = new Article();

  constructor(private articleService: ArticleService, private router: Router) {}

  onSubmit() {
    if (this.article.articleTitle !== null && this.article.articleBody != null) {
      this.saveArticle();
    }
    else {
      alert ("Fill the fields please!");
    }
  }

  saveArticle() {
    this.articleService.addArticle(this.article).subscribe (
      {
        next: (data) => {
          this.goToArticleList();
        },
        error: (error:any) => {console.log(error)}
      }
    );
  }

  goToArticleList() {
    this.router.navigate(['/articles']);
  }
}
