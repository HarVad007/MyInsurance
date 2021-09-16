import { Component, OnInit } from '@angular/core';
import { Register } from './Register';
import * as moment from 'moment';
import { CurrencyConverterService } from '../currency-converter.service';
import { ValidationService } from '../validation.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  
  newRegister: Register = new Register();
  Repass: string;
  flag = false;
  year ='';
  current='';
  

  registerThisNewUser(){
    console.log("register name is", this.newRegister); 
  }

  passSame(): boolean
  {
    if(this.Repass === this.newRegister.password)
    return true;
    else
    return false;
  }

  check(){

    this.current = moment(new Date()).format('YYYY');
    this.year = moment(this.newRegister.birthdate).format('YYYY');

   if((Number(this.current) - Number(this.year) < 18) && Number(this.year) > 1970){
      this.flag = false;
    }
    else if(this.newRegister.username.length <8 || this.newRegister.username.length >15){
      this.flag = false;
    }
    else if(this.newRegister.phone.length != 10){
      this.flag = false;
    }
    else if(this.newRegister.email.length <5){
      this.flag = false
    }
    else{
      this.flag = true;
    }

    /*if(this.Repass === this.newRegister.password){
      this.flag= true;
      //alert("Password should match")
    }
    else{
      this.flag = false;
    }*/
  }

  onSubmit(){
    console.log(this.newRegister);
  }


  //private on ccs means it is the data member and 
  constructor(private ccs: CurrencyConverterService, private vs: ValidationService) { }
  callCurrencyRate(){this.ccs.convert();}
  callConvert(){  //<---this is called on button click
    console.log('callConvert() of register.component.ts is called')
    this.ccs.convert(); //<--- actual service call
  }
  validateFormsUsername(){
    this.vs.validateUsername(this.newRegister.username);
  }
  
  
  ngOnInit(): void {
  }

}
