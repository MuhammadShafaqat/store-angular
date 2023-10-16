import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  signUp(data:any){
    return this.http.post('http://localhost:4000/auth' + '/register', data)
  }
}














// signUp(){
//   return this.http.get('http://localhost:4000/users')
// }
