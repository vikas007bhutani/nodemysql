import { Injectable } from '@angular/core';   
import {Http,Response, Headers, RequestOptions } from '@angular/http';   
   
import { Observable, of } from 'rxjs';  
import { map, catchError } from 'rxjs/operators'; 

  
@Injectable()  
export class CommonService {  
  
  constructor(private http: Http) { }  
  
  saveUser(user){      
    return this.http.post('http://172.31.38.163:8080/api/SaveUser/', user).pipe(map((response: Response) =>response.json()))              
  }   
  
  GetUser<T>():Observable<any>{ 
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'q= 0.8;application / json; q = 0.9');      
    return this.http.get('http://13.233.166.104:3000/api/getUser/').pipe(map((response:any) =>response.json()),catchError(<T>(error: any, result?: T) => {
      console.log(error);
      return of(result as T);
    }))              
  }  
 deleteUser(id){   
    return this.http.post('http://172.31.38.163:8080/api/deleteUser/',{'id': id}).pipe(map((response: Response) =>response.json()))               
  }  
  
} 