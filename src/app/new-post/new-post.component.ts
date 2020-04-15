import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators, FormGroup  } from '@angular/forms';
import { PostHandlerService } from '../post-handler.service';
import { ArticleInterface } from '../article-interface';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  postForm: FormGroup;

  constructor(private postHandlerService: PostHandlerService, private formBuilder: FormBuilder) { 
    this.postForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(10)]],
      content: ['', Validators.required],
      author: '',
      minutesRequired: [0, [Validators.min(1), Validators.pattern('^[0-9]*$')]]
    })
  }

  ngOnInit(): void {
    
  }
  
  onSubmit(postData) {
    if(!this.postForm.valid) {
      return;
    }
    
    let newPost: ArticleInterface = {
      articleId: 0,
      author: postData.author,
      title: postData.title,
      content: postData.content,
      minutesRequired: postData.minutesRequired,
      datePosted: new Date().getTime()
    }

    this.postHandlerService.submit(newPost);
    
    console.warn('Your post has been submitted', newPost);
  }

}
