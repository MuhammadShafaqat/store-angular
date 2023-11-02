import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  addHeader(): HttpHeaders {
    let headers = new HttpHeaders({
      'Content-Type':'application/json', 
      'Accept':'application/json', 
      'Authorization':'Bearer '+localStorage.getItem('token')
    })
    return headers;
  }

  constructor(private http:HttpClient) { }
  addCategory(userObj: any){ 

 return this.http.post<any>('http://localhost:4000/categories' + '/categories', userObj, {'headers': this.addHeader()})
  }
}
