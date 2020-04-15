import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule  } from '@angular/forms';

import { appRoutes } from './routerConfig';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LatestArticlesComponent } from './latest-articles/latest-articles.component';
import { AllArticlesComponent } from './all-articles/all-articles.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { PostHandlerService } from './post-handler.service';
import { NewPostComponent } from './new-post/new-post.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LatestArticlesComponent,
    AllArticlesComponent,
    FirstPageComponent,
    NewPostComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes), ReactiveFormsModule
  ],
  providers: [PostHandlerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
