import { Component } from '@angular/core';
import { Article } from '../article';
import { ArticleService } from '../article.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { error } from 'console';
import { Tag } from '../tag';
import { TagService } from '../tag.service';

@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.component.html',
  styleUrl: './article-view.component.css'
})
export class ArticleViewComponent {
  article: Article = new Article();
  id: number;

  constructor(private articleService: ArticleService, private router: Router, private route: ActivatedRoute, private tagService: TagService){}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.articleService.getArticleById(this.id).subscribe(
      {
        next: (data) => this.article = data
        ,
        error: (err: any) => console.log(err)
      }
    );
  }

  
  deleteArticle() {
    this.articleService.deleteArticle(this.id).subscribe(
      {
        next: (data) => this.goToArticleList(),
        error: (error) => console.log(error)
      }
    )
  }

  goToArticleList() {
    this.router.navigate(['/']);
  }

}
