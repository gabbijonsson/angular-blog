import { Component, OnInit } from '@angular/core';
import { PostHandlerService } from '../post-handler.service';
import { ArticleInterface } from '../article-interface';

@Component({
  selector: 'app-all-articles',
  templateUrl: './all-articles.component.html',
  styleUrls: ['./all-articles.component.css']
})
export class AllArticlesComponent implements OnInit {

  articles: ArticleInterface[];

  constructor(private postHandler: PostHandlerService) { }

  ngOnInit(): void {
    this.initArticle();
  }

  initArticle = () => {
    this.articles = this.postHandler.getAllArticles(false)
  }

  removeArticle = (articleId) => {
    this.postHandler.removeArticle(articleId)
    this.initArticle();
  }

}
