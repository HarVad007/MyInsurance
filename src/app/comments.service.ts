import { ConstantPool } from '@angular/compiler';

import { Injectable } from '@angular/core';

import{ HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MyComment } from './comments/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  loadCommentByIdService(mynum: number) {
    throw new Error('Method not implemented.');
  }
  commentsURL="https://jsonplaceholder.typicode.com/comments";

  constructor(private myHttp: HttpClient) { }
  loadCommentService(): Observable<MyComment[]> {
    console.log('Comments service invoked...');
    //4 invoke http client
    return this.myHttp.get<MyComment[]>(this.commentsURL);
  }

  loadCommentById(num: number): Observable<MyComment> {
    console.log('Comments service invoked...');
    //4 invoke http client
    return this.myHttp.get<MyComment>(this.commentsURL+"/"+num);
  }
}
