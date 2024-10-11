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
  tags: Tag[] = [];
  

  constructor(private articleService: ArticleService, private router: Router, private tagService: TagService) {}

  // Avoids submit with enter key
  preventSubmit(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      event.preventDefault(); 
    }
  }

  onSubmit() {
    this.article.articleTags = this.tags;
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
    const tagText = document.querySelector('#inputTags') as HTMLInputElement;
    const addedTags = document.querySelector('#articleTags') as HTMLElement;

    //Exceptions 
    if(!tagText.value){
      return;
    }

    if(!tagText || this.tags.some(tag => tag.tagName.toLocaleLowerCase() === tagText.value.toLocaleLowerCase())){
      alert("Don't use duplicated tags!")
      tagText.value = "";
      return;
    }

    //Adding value to the tag array
    const tag = new Tag();
    tag.tagName = tagText.value;
    this.tags.push(tag);    

    console.log(this.tags);

    //Removing value from the input
    tagText.value= "";
  }

  removeTag(i: number) {
    console.log("remove function");
    const deleteTag = document.querySelector(`#tagID${i}`) as HTMLElement;
    this.tags.splice(i,1);
    deleteTag.remove();
  }
}
