import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

 validateDate(){
   console.log('phone validation');
 }
 validatePhone(){
   console.log('phone validation');
 }
 validateUsername(s: string){
   console.log("username validation",s);
 }
}