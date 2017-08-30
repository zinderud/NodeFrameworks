import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {PostService} from "../shared/post.service";
import {BlogPost} from "../shared/structures/blog-post";

@Component({
  selector: 'app-new-blog-post',
  templateUrl: './new-blog-post.component.html',
  styleUrls: ['./new-blog-post.component.scss']
})
export class NewBlogPostComponent implements OnInit {

  ngOnInit(): void {
  }

  article: BlogPost = {
    _id: 0,
    name: "",
    content: "",
    points: 0
  };
  lastArticleId: number = 0;

  constructor(private postService: PostService, private router: Router){
  }

  onSubmit(){
    this.article._id = this.lastArticleId + 1;
    console.log(JSON.stringify(this.article));
    this.postService.addPost(this.article).subscribe(
      article => {
        console.log(article);
        this.router.navigate(['/home']);
      },
      error => console.log(error)
    );
  }

}
