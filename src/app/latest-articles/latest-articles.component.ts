import { Component, OnInit } from '@angular/core';
import { PostHandlerService } from '../post-handler.service';
import { ArticleInterface } from '../article-interface';

@Component({
  selector: 'app-latest-articles',
  templateUrl: './latest-articles.component.html',
  styleUrls: ['./latest-articles.component.css']
})
export class LatestArticlesComponent implements OnInit {

  articles: ArticleInterface[];

  constructor(private postHandler: PostHandlerService) { }

  ngOnInit(): void {
    this.initArticles();
  }

  initArticles = () => {
    this.articles = this.postHandler.getAllArticles(true).slice(0, 5);
  }

  removeArticle = (articleId) => {
    this.postHandler.removeArticle(articleId)
    this.initArticles();
  }

}
