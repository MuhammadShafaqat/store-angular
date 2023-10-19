import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

login(userObj:any){
 return this.http.post<any>('http://localhost:4000/auth' + '/signIn', userObj)
}

  signUp(userObj:any){
    return this.http.post<any>('http://localhost:4000/auth' + '/register', userObj)
  }

  signOut(){
    localStorage.removeItem('token');
  }

}














// signUp(){
//   return this.http.get('http://localhost:4000/users')
// }
