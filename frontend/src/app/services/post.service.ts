import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
 return this.http.post<any>('http://localhost:4000/categories' + '/addCategory', userObj, {'headers': this.addHeader()})
  }

  addProduct(userObj:any){
  return this.http.post<any>('http://localhost:4000/products' + '/addProduct', userObj, {'headers': this.addHeader()})
  }
}
