import { Injectable } from '@angular/core';
import { Http, Response  } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Tvprogramme } from './tvprogramme';

import { environment } from '../../environments/environment';

@Injectable()
export class TvprogrammesService {

  private _wpBase = environment.wpBase;

  constructor(private http:Http) { }

  getTVPs(): Observable<Tvprogramme[]> {

      return this.http
        .get(this._wpBase + 'tv_programmes?orderby=menu_order&order=asc&per_page=100')
        .map((res: Response) => res.json())
        .catch((err: Response | any) => {
          console.error(err)
          return Observable.throw(err);
        });

  }

  // getTVP(slug): Observable<Tvprogramme> {

  //     return this.http
  //       // .get(this._wpBase + `posts?slug=${slug}`)
  //       .get(this._wpBase + `tv_programmes?slug=${slug}`)
  //       .map((res: Response) => res.json())
  //       .catch((err: Response | any) => {
  //         console.error(err)
  //         return Observable.throw(err);
  //       });

  // }
}



