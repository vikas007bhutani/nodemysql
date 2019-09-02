import { Injectable } from '@angular/core';   
import {Http,Response, Headers, RequestOptions } from '@angular/http';   
import {titleDetails } from '../app/model/getvaluesmodel';
import {ilogindetails } from '../app/model/loginmodel';
import { Observable, of } from 'rxjs';  
import { map, catchError } from 'rxjs/operators'; 

import { HttpClient } from  "@angular/common/http";

  
@Injectable()  
export class CommonService {  
  
  constructor(private http: HttpClient) { }  
  
  saveUser(ilogindetails){      
    return this.http.post('http://13.233.166.104:3000/api/saveuser/', ilogindetails);              
  }   
  
  GetUser(): Observable<any>{ 
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'q= 0.8;application / json; q = 0.9');      
    return this.http.get('http://13.233.166.104:3000/api/getUser/');
  }  
  
//  deleteUser(id){   
//     return this.httpclient.post('http://172.31.38.163:8080/api/deleteUser/',{'id': id}).pipe(map((response: Response) =>response.json()))               
//   }  
  
} 