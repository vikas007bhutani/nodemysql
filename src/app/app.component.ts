import { Component, OnInit } from '@angular/core';  
import {FormGroup,FormControl,Validators,FormsModule, } from '@angular/forms';  
import {CommonService} from './common.service';  
import {ilogindetails } from '../app/model/loginmodel';
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
   
   
ngOnInit() {    
  debugger;
  this.newService.GetUser().subscribe((response)=>{
    this.Repdata=response;
},(error) => {
    console.log('error is ', error);
})
}  
  
// onSave = function(user,isValid: boolean) {    
//  user.mode= this.valbutton;  
//   this.newService.saveUser(user)  
//   .subscribe(data =>  {  alert(data.data);  
       
//     this.ngOnInit();    
//   }   
//   , error => this.errorMessage = error )  
    
// }      
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