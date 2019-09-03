import { Component, OnInit } from '@angular/core';
import {CommonService} from '.././common.service';  
import {ilogindetails } from '../model/loginmodel';
import {titleDetails } from '../model/getvaluesmodel';
import {Http,Response, Headers, RequestOptions } from '@angular/http'; 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private newService   :CommonService) {   }  
   Repdata:any=[] ;  
   valbutton ="Save";  
   ilogin:ilogindetails;
   titles:titleDetails;
   
ngOnInit() {    
  this.ilogin=new ilogindetails();
//   debugger;
//   this.newService.GetUser().subscribe((response)=>{
//     this.Repdata=response;
//     console.log(this.Repdata);
//     let resSTR = JSON.stringify(response);
//     let resJSON = JSON.parse(resSTR);
//     console.log("body"+  resJSON._body);
// },(error) => {
//     console.log('error is ', error)
// })
}  
  
onSave = function() {    
  debugger;
   this.newService.loginUser(this.ilogin)  
  .subscribe((response) =>  { 
    alert(response);
    
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
