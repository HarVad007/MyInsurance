import { Component, OnInit } from '@angular/core';

@Component({
  
  selector: 'app-button',
  template: `<html>
   <head>
      <title>LikeDislike</title>
      </head> 
      <body>
      <h1> This Heading belongs to button.component.ts </h1>
      <h2 id="h2id">This Heading belongs to button.component.ts </h2>
      <h3 class="myhead"> This Heading belongs to button.component.ts </h3>
      <h4 class="myhead"> This Heading belongs to button.component.ts </h4>
      <h5 class="myhead"> This Heading belongs to button.component.ts </h5>

       <button     class="{{b1Class}}"
        (click)="goLike()"> {{likeLabel}}{{likeCounter}} 
         </button>
         
         <button    class="{{b2Class}}"
         (click)="goDisLike()">{{dislikeLabel}}{{disLikeCounter}}
          </button>
          </body>
           </html>`,
  styles:[
  	  `
        h1{ color: green}
        #h2id { color: blue}
        .myhead{color: orange}

        .liked:active{
          font-weight: bold;
        }
        
      	.liked{
	        	background-color:green;
	        	color: white;
		        padding:15px 32px;
		        font-size: 16px;
		          }

        .disliked:active{
          font-weight: bold;
        }

	      .disliked{
		    background-color:red;
		    color: white;
		    padding:15px 32px;
		    font-size: 16px;
		              }

	    `
]

 // templateUrl: './button.component.html',
 // styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  b1Class: string = "liked";
  b2Class: string = "disliked";

  likeCounter: number=100;
  disLikeCounter: number=27;

  likeLabel: string = 'Like';
  dislikeLabel: string = 'DisLike';
  
  goLike() {
    console.log('like is clicked...');
    ++this.likeCounter;
    if(this.likeCounter>115){
      this.likeCounter=100;
    }
  }
  goDisLike() {
    console.log('dislike is clicked...');
    ++this.disLikeCounter;
    if(this.disLikeCounter>31){
      this.disLikeCounter=27;
    }

  }

  constructor() { }

  ngOnInit(): void {
  }

}
/*
<h1> This Heading belongs to button.component.ts </h1>
<h2 id="h2id">This Heading belongs to button.component.ts </h2>
<h3 class="myhead"> This Heading belongs to button.component.ts </h3>
<h4 class="myhead"> This Heading belongs to button.component.ts </h4>
<h5 class="myhead"> This Heading belongs to button.component.ts </h5>
*/