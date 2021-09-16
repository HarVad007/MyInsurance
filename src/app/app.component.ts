import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  
  title = 'EMI Calculator';
  principal: number = 50000;
  rate: number = 5;
  years: number = 3;
  si: number = (this.principal * this.rate * this.years)/100;

  accountOpeningDate = new Date();

  isUserLoggedIn: boolean= false;

  selectedValue1 = "";
  selectedValue2 = "";
  flag = false;

  calc1()
  {
    this.flag =this.selectedValue1 === this.selectedValue2 ? false : true;
    console.log(this.flag);
  }



  calculateSimpleInterest(){
    this.si = (this.principal * this.rate * this.years)/100;
    console.log('Calculated Simple Interest',this.si);
   
  }

}