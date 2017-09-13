import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ResponsiveModule } from 'ng2-responsive';

import { AppComponent } from './app.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { Wpng2RoutingModule } from './app-routing.module';
import { PostSingleComponent } from './posts/post-single/post-single.component';
import { TvprogrammesIndexComponent } from './tvprogrammes/tvprogrammes-index/tvprogrammes-index.component';
import { AboutComponent } from './about/about.component';
import { NopageComponent } from './nopage/nopage.component';
import { PlainTextPipe } from './pipes/plain-text.pipe';
import { TvcategoriesMenuComponent } from './tvcategories/tvcategories-menu/tvcategories-menu.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostSingleComponent,
    TvprogrammesIndexComponent,
    AboutComponent,
    NopageComponent,
    PlainTextPipe,
    TvcategoriesMenuComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Wpng2RoutingModule,
    ResponsiveModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
