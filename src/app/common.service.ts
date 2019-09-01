import { Injectable } from '@angular/core';   
import {Http,Response, Headers, RequestOptions } from '@angular/http';   
import {ilogindetails } from '../app/model/loginmodel';
import { Observable, of } from 'rxjs';  
import { map, catchError } from 'rxjs/operators'; 

import { HttpClient } from  "@angular/common/http";

  
@Injectable()  
export class CommonService {  
  
  constructor(private httpclient: HttpClient) { }  
  
  // saveUser(user){      
  //   return this.http.post('http://172.31.38.163:8080/api/SaveUser/', user).pipe(map((response: Response) =>response.json()))              
  // }   
  
  GetUser():Observable<any>{ 
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'q= 0.8;application / json; q = 0.9');      
    return this.httpclient.get('http://13.233.166.104:3000/api/getUser/').pipe(map((response:Response) =>response.json()),catchError(<T>(error: any, result?: T) => {
      console.log(error);
      return of(result as T);
    }))              
  }  
//  deleteUser(id){   
//     return this.httpclient.post('http://172.31.38.163:8080/api/deleteUser/',{'id': id}).pipe(map((response: Response) =>response.json()))               
//   }  
  
} 