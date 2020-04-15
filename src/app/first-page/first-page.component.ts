import { Component, OnInit } from '@angular/core';
import { PostHandlerService } from '../post-handler.service';
import { ArticleInterface } from '../article-interface';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {

  article: ArticleInterface;

  constructor(private postHandler: PostHandlerService) { }

  ngOnInit(): void {
    this.initArticles();
  }

  initArticles = () => {
    this.article = this.postHandler.getLatestArticle()
  }

  toDate = (dateMs) => {
    return new Date(dateMs).toLocaleString();
  }

  removeArticle = (articleId) => {
    this.postHandler.removeArticle(articleId)
    this.initArticles();
  }

}
