import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { About } from './about';

import { environment } from '../../environments/environment';



@Injectable()
export class AboutService {
  private _wpBase = environment.wpBase;

  constructor(private http:Http) { }

  getAbout(): Observable<About> {
    return this.http
      .get(this._wpBase + 'pages?slug=about-bon-tv')
      .map((res: Response) => res.json())
      .catch((err: Response | any) => {
        console.error(err);
        return Observable.throw(err);
      });
  }

}
