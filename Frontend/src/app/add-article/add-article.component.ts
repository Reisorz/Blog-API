import { Component, ViewEncapsulation } from '@angular/core';
import { Article } from '../article';
import { ArticleService } from '../article.service';
import { Router } from '@angular/router';
import { Tag } from '../tag';
import { TagService } from '../tag.service';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrl: './add-article.component.css',
  encapsulation: ViewEncapsulation.None
})
export class AddArticleComponent {
  article: Article = new Article();
  tags: Tag[];
  

  constructor(private articleService: ArticleService, private router: Router, private tagService: TagService) {}

  ngOnInit() {
    this.getTags();
  }

  getTags() {
    this.tagService.getTagList().subscribe((data => {this.tags = data}));
  }

  // Avoids submit with enter key
  preventSubmit(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      event.preventDefault(); 
    }
  }

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

  //Tags
  addTag(){
    const tagText = document.querySelector('#articleTags') as HTMLInputElement;
    const addedTags = document.querySelector('#addedTags') as HTMLInputElement;
    console.log(tagText.value);

    //Creating new div with tag value
    // const newDiv = document.createElement('div') as HTMLInputElement;
    // newDiv.classList.add('tag-div');
    // newDiv.textContent = tagText.value;
    // addedTags.appendChild(newDiv);

    const newDiv = `<div class="tag-div">${tagText.value}<i class="bi bi-x"></i></div>`;
    addedTags.insertAdjacentHTML('beforeend', newDiv);

    //Removing value from the input
    tagText.value = '';

  }


  
}
