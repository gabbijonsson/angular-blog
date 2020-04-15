import { Injectable, OnInit } from '@angular/core';
import { ArticleInterface } from './article-interface';

@Injectable({
  providedIn: 'root'
})
export class PostHandlerService {

  defaultArticles = [
    {
    articleId: 1,
    datePosted: 1586945773751,
    title: 'Pool of Water',
    content: 'I had a user come up to me and ask why their computer would not turn on. I go over to the desk and notice a pool of water so I immediately unplug the computer and lift it up. Water came pouring out of the side vents so the user says “oh ya I spilled water on my desk, could that be the problem?”',
    author: 'Gregory',
    minutesRequired: 2
    },
    {
      articleId: 2,
      datePosted: 1586344773751,
      title: 'The floppydisk',
      content: 'Person entering data on a floppy disk was told that she had to make a copy at the end of every day to provide a backup. About 6 months later, the disk became corrupt; so the technician asked if she had the copies. She opened a filing cabinet drawer and pulled out a stack of paper; on every sheet was a photocopy of the disk.',
      author: 'Mary',
      minutesRequired: 3
    },
    {
      articleId: 3,
      datePosted: 1586244773751,
      title: 'Help-button!',
      content: 'I was walking through an office one day and a user said to me, “At last! It’s taken you long enough. I pressed F1 (help button) over 2 hours ago!”',
      author: 'Anon',
      minutesRequired: 1
    },
    {
      articleId: 4,
      datePosted: 1586944723751,
      title: 'Out-of-Monitor',
      content: 'I got a call about a monitor not working. When going through the standard debugging steps, user said there were no lights, he could not find the power button, etc, etc. Then I ask, “Is there actually a monitor on the desk”, and answer was “no.” Someone had moved it.',
      author: 'Jeff',
      minutesRequired: 2
    },
    {
      articleId: 7,
      datePosted: 1586944373751,
      title: 'Useless Anti-Virus',
      content: 'Once upon a time I had a user receive an email that our anti-virus software promptly quarantined. The user was frantic, “I must have that email!” I said, “I’m sorry, it has a virus. You’ll have to contact the guy who sent it, have him clean his computer of viruses, and resend.” He replied, “Can’t you just turn off anti-virus long enough for me to get this email?”',
      author: 'Anna',
      minutesRequired: 3
    },
    {
      articleId: 8,
      datePosted: 1586944773751,
      title: 'Reading Rainbow',
      content: 'I had a guy complaining that his computer had been hacked (of course every time anything strange ever goes wrong, it’s been “hacked”) because whenever he booted the computer, opened a program, closed a program, whatever, the entire theme song to Reading Rainbow would play. The computer hadn’t been hacked, he had just left it unattended and someone came by and set every single Windows sound to play the whole song. I changed the theme and was done. Lesson learned: never leave a computer unattended because there are tricksters out there!',
      author: 'Melody',
      minutesRequired: 4
    },
  ];

  constructor() { this.initArticles(); }

  getAllArticles = (sorted: boolean): ArticleInterface[] => {
    let articles = JSON.parse(localStorage.getItem('articles'));
    if (!articles) {
      return [];
    }
    if (sorted) {
      articles.sort(this.datePostedComparator);
    }
    return articles;
  };

  getLatestArticle = () => {
    let articles = this.getAllArticles(true);
    return articles[0];
  }

  removeArticle = (articleId) => {
    let articles = this.getAllArticles(false);
    let index = articles.findIndex((article) => article.articleId == articleId);
    console.log(articles);
    console.log(index);
    articles.splice(index, 1);
    console.log(articles)
    this.saveToLocalStorage(articles);
    
  }

  datePostedComparator = (firstArticle: ArticleInterface, secondArticle: ArticleInterface) => {
      if (firstArticle.datePosted < secondArticle.datePosted) {
        return 1;
      }
      else if (firstArticle.datePosted > secondArticle.datePosted) {
        return -1
      }
      return 0;
  }

  submit(newPost: ArticleInterface) {
    //get all
    let articles = this.getAllArticles(false);

    //get next id
    let currentId = articles.length > 0 ? articles[articles.length-1].articleId : 0;
    newPost.articleId = currentId + 1;

    //add new article to current list
    articles.push(newPost);

    //save list
    this.saveToLocalStorage(articles)
  }

  saveToLocalStorage(articleArray) {
    localStorage.setItem('articles', JSON.stringify(articleArray));
  }

  initArticles() {
    if (this.getAllArticles(false).length == 0) {
      this.saveToLocalStorage(this.defaultArticles);
      console.log('Initiated default articles')
    }
  }

}
