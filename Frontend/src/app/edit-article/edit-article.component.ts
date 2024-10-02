import { Component } from '@angular/core';
import { Article } from '../article';
import { ArticleService } from '../article.service';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrl: './edit-article.component.css'
})
export class EditArticleComponent {
  article: Article;
  id: number;

  constructor(private router: Router, private articleService: ArticleService, private route: ActivatedRoute){}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.articleService.getArticleById(this.id).subscribe(
      {
        next: (data) => this.article = data,
        error: (error: any) => console.log(error)
      }
    );
  }

  onSubmit(){
    this.saveArticle();
  }

  saveArticle() {
    this.articleService.editArticle(this.id, this.article).subscribe(
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