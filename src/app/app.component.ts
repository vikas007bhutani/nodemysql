import { Component, OnInit } from '@angular/core';  
import {FormGroup,FormControl,Validators,FormsModule, } from '@angular/forms';  
import {CommonService} from './common.service';  
import {ilogindetails } from '../app/model/loginmodel';
import {titleDetails } from '../app/model/getvaluesmodel';
import {Http,Response, Headers, RequestOptions } from '@angular/http'; 

import { HttpClient } from  "@angular/common/http";  
  
@Component({  
  selector: 'app-root',  
  templateUrl: './app.component.html',  
  styleUrls: ['./app.component.css']  
})  
export class AppComponent {  
    
     
  constructor(private newService   :CommonService) {   }  
   Repdata:any=[] ;  
   valbutton ="Save";  
   ilogin:ilogindetails;
   titles:titleDetails;
   
ngOnInit() {    
  debugger;
  this.newService.GetUser().subscribe((response)=>{
    this.Repdata=response;
    console.log(this.Repdata);
    let resSTR = JSON.stringify(response);
    let resJSON = JSON.parse(resSTR);
    this.Repdata=Array.bind(resJSON._body);
},(error) => {
    console.log('error is ', error)
})
}  
  
onSave = function(ilogin,isValid: boolean) {    
   this.newService.saveUser(ilogin)  
  .subscribe((response) =>  { 
    console.log(response);
    
  },(error) =>{ this.errorMessage = error} )
    
}      
// edit = function(kk) {  
// this.id = kk._id;  
// this.name= kk.name;  
// this.address= kk.address;  
// this.valbutton ="Update";  
// }  
  
// delete = function(id) {  
// this.newService.deleteUser(id)  
// .subscribe(data =>   { alert(data.data) ; this.ngOnInit();}, error => this.errorMessage = error )   
// }  
  
}  