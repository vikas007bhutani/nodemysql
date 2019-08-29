import { Injectable } from '@angular/core';   
import {Http,Response, Headers, RequestOptions } from '@angular/http';   
   
import { Observable } from 'rxjs';  
import { map } from 'rxjs/operators'; 

  
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
    return this.http.get('http://172.31.38.163/api/getUser/',{headers}).pipe(map((response) =>response.json()))              
  }  
 deleteUser(id){   
    return this.http.post('http://172.31.38.163:8080/api/deleteUser/',{'id': id}).pipe(map((response: Response) =>response.json()))               
  }  
  
} 