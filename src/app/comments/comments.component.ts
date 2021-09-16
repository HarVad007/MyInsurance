import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../comments.service';
import { MyComment } from './comment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  allTheComments: MyComment[];  //global variable //blank array
 
  
  constructor(private commentsService: CommentsService) { }

  ngOnInit(): void {
  }

  loadComments(){  //step 2
    console.log('loadComments() invoked...')

    //3
    this.commentsService.loadCommentService().subscribe((data: MyComment[]) => {
      this.allTheComments = data;
      console.log(this.allTheComments);
    }, (err) => {
      console.log(err);
    }
    );
  }

  mynum: number;
  singleComment: MyComment = new MyComment();

  loadCommentById(){  //step 2
    this.commentsService.loadCommentById(this.mynum).subscribe((data: MyComment) => {
      this.singleComment = data;
      console.log(this.singleComment);
    }, (err) => {
      console.log(err);
    }
    );
  }

}
