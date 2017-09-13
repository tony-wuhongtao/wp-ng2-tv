import { Injectable } from '@angular/core';
import { Http, Response  } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Post } from './post';

import { environment } from '../../environments/environment';

@Injectable()
export class PostsService {

  private _wpBase = environment.wpBase;

  constructor(private http:Http) { }

  getPosts(): Observable<Post[]> {

      return this.http
        // .get(this._wpBase + 'posts')
        .get(this._wpBase + 'tv_programmes')
        .map((res: Response) => res.json())
        .catch((err: Response | any) => {
          console.error(err)
          return Observable.throw(err);
        });

  }

  getPost(slug): Observable<Post> {

      return this.http
        // .get(this._wpBase + `posts?slug=${slug}`)
        .get(this._wpBase + `tv_programmes?slug=${slug}`)
        .map((res: Response) => res.json())
        .catch((err: Response | any) => {
          console.error(err)
          return Observable.throw(err);
        });

  }
}


