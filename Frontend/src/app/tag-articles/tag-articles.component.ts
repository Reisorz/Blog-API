import { Component } from '@angular/core';
import { Article } from '../article';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tag-articles',
  templateUrl: './tag-articles.component.html',
  styleUrl: './tag-articles.component.css'
})
export class TagArticlesComponent {
  articles: Article[];

  constructor(private router: Router, private route: ActivatedRoute) {}

}
