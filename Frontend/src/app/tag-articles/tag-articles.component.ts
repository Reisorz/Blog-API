import { Component } from '@angular/core';
import { Article } from '../article';
import { ActivatedRoute, Router } from '@angular/router';
import { TagService } from '../tag.service';
import { Tag } from '../tag';

@Component({
  selector: 'app-tag-articles',
  templateUrl: './tag-articles.component.html',
  styleUrl: './tag-articles.component.css'
})
export class TagArticlesComponent {
  articles: Article[];
  id: number;
  tag: Tag;

  constructor(private router: Router, private route: ActivatedRoute, private tagService: TagService) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.tagService.getArticleList(this.id).subscribe(
      {
        next: (data) => this.articles = data,
        error: (error: any) => console.log(error)
      }
    );

    this.tagService.getTagById(this.id).subscribe(
      {
        next: (data) => this.tag = data,
        error: (error: any) => console.log(error)
      }
    );
  }



}
