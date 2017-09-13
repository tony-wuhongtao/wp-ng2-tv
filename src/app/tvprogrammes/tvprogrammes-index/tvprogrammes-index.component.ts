import { Component, OnInit, AfterContentInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Tvprogramme } from '../tvprogramme';
import { TvprogrammesService } from '../tvprogrammes.service';

declare var init: any;

 
@Component({
  selector: 'app-tvprogrammes-index',
  templateUrl: './tvprogrammes-index.component.html',
  styleUrls: ['./tvprogrammes-index.component.css'],
  providers: [TvprogrammesService]
})
export class TvprogrammesIndexComponent implements OnInit {

  tvps: Tvprogramme[];


  constructor(public sanitizer: DomSanitizer, private tvpService: TvprogrammesService) {
    this.sanitizer = sanitizer;
   }

  getTvprogrammes() {
    this.tvpService
      .getTVPs()
      .subscribe(res => {
        this.tvps = res;
        console.log(this.tvps);
        while(this.tvps.length < 3){
          this.getTvprogrammes();
          console.log("try to get TV");
        }
        
        
      });

  }

  getSafeURL(url){
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }



  ngOnInit() {
    this.getTvprogrammes();
    
  }

}
