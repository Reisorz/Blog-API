import { Component } from '@angular/core';
import { Tag } from '../tag';
import { Router } from '@angular/router';
import { TagService } from '../tag.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrl: './explore.component.css'
})
export class ExploreComponent {
  tags: Tag[];

  constructor(private router: Router, private tagService: TagService){}

  ngOnInit() {
    this.tagService.getTagList().subscribe(
      {
        next: (data) => this.tags = data,
        error: (error:any) => console.log(error)
      }
    )
  }



}
