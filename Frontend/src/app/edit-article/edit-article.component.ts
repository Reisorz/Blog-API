import { Component } from '@angular/core';
import { Article } from '../article';
import { ArticleService } from '../article.service';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'console';
import { Tag } from '../tag';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrl: './edit-article.component.css'
})
export class EditArticleComponent {
  article: Article;
  id: number;
  tags: Tag[] = [];

  constructor(private router: Router, private articleService: ArticleService, private route: ActivatedRoute){}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.articleService.getArticleById(this.id).subscribe(
      {
        next: (data) => { this.article = data;
          this.tags = this.article.articleTags; },
        error: (error: any) => console.log(error)
      }
    );
  }


    // Avoids submit with enter key
    preventSubmit(event: KeyboardEvent) {
      if (event.key === 'Enter') {
        event.preventDefault(); 
      }
    }

  onSubmit(){
    
    this.article.articleTags = this.tags;
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
