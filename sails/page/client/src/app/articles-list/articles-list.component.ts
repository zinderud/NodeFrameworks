import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import {PostService} from "../shared/post.service";
import {Router} from "@angular/router";
import {BlogPost} from "../shared/structures/blog-post";

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
})
export class ArticlesListComponent implements OnInit {


  ngOnInit(): void {
    this.articles = [];
    this.postService.getLastArticleId().subscribe(
      lastArticleId => {
        console.log(lastArticleId);
        this.lastIndex = lastArticleId._id;
        console.log(this.lastIndex);
        this.getFourAricles();
      });

  }

  constructor(private http: Http,
              private postService: PostService,
              private router: Router){

  }

  articles: BlogPost[];
  lastIndex: number;

  getFourAricles(){
    this.postService.getPartOfPosts(4, this.lastIndex).subscribe(
      articles => {
        console.log(articles);
        this.articles = this.articles.concat(articles);
        console.log(articles.length);
        this.lastIndex -= articles.length;
        console.log(this.lastIndex);
        function compareDesc(a,b) {
          if (a._id > b._id)
            return -1;
          if (a._id < b._id)
            return 1;
          return 0;
        }
        this.articles.sort(compareDesc);
        console.log(this.articles);
      }
    );
  }

  loadMore(){
    this.getFourAricles();
  }

  onSelect(article: BlogPost){
    // this.router.navigate(['/blog/article',article._id]);
  }

}
