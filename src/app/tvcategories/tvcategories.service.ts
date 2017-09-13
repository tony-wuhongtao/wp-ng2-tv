import { Injectable } from '@angular/core';
import { Http, Response  } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { TvcategoriesMenu } from './tvcategories-menu';

import { environment } from '../../environments/environment';

@Injectable()
export class TvcategoriesService {
  private _wpBase = environment.wpBase;

  constructor(private http:Http) { }

  getCateMenu(): Observable<TvcategoriesMenu[]> {

      return this.http
        .get(this._wpBase + 'tv_programme_category')
        .map((res: Response) => res.json())
        .catch((err: Response | any) => {
          console.error(err)
          return Observable.throw(err);
        });

  }

}
