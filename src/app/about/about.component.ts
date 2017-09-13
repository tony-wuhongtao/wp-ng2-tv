import { Component, OnInit } from '@angular/core';
import { About } from './about';
import { AboutService} from './about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [AboutService]
})



export class AboutComponent implements OnInit {

  about: About;

  constructor(private aboutService: AboutService) { }

  getAbout(){
    this.aboutService
      .getAbout()
      .subscribe(res => {
        this.about = res[0];
        console.log(this.about);
      });
  }
  ngOnInit() {
    this.getAbout();
  }
  

}
