import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from "@angular/http";

import {Observable} from "rxjs/Observable";
import {BlogPost} from "./structures/blog-post";


@Injectable()
export class PostService{

  constructor(private http: Http){

  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  addPost(article: BlogPost): Observable<BlogPost>{
    let articleJson = JSON.stringify(article);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post('/article/addOne', articleJson, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getPartOfPosts(num: number, lastIndex: number): Observable<BlogPost[]>{
    console.log(num + ', ' + lastIndex);
    return this.http.get('/article/getPart?num=' + num + '&lastIndex=' + lastIndex)
      .map(function (res: Response) {
        let body = res.json();
        return body || { };
      })
      .catch(this.handleError);
  }

  getLastArticleId(): Observable<BlogPost>{
    return this.http.get('/article/getLastArticleId')
      .map(function (res: Response) {
        let body = res.json();
        return body || { };
      })
      .catch(this.handleError);
  }

  getArticle(id: number) {
    return this.http.get('/article/getArticle?article='+ id)
      .toPromise()
      .then(function (res: Response) {
        let body = res.json();
        return body || { };
      })
      .catch(this.handleError);
  }
}
