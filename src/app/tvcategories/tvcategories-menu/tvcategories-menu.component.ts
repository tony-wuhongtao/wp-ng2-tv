import { Component, OnInit } from '@angular/core';

import { TvcategoriesMenu } from '../tvcategories-menu';
import { TvcategoriesService } from '../tvcategories.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tvcategories-menu',
  templateUrl: './tvcategories-menu.component.html',
  styleUrls: ['./tvcategories-menu.component.css'],
  providers: [TvcategoriesService]
})
export class TvcategoriesMenuComponent implements OnInit {

  tvcates: TvcategoriesMenu[];

  constructor(private tvcateService: TvcategoriesService, private router: Router) { }

  getTVCateMenu() {
    this.tvcateService
      .getCateMenu()
      .subscribe(res => {
        this.tvcates = res;
      });
  }

  ngOnInit() {
    this.getTVCateMenu();
  }

}
