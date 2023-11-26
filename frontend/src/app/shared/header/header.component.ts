import { DataService } from './../../services/data.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


 
constructor(private api:ApiService,private data:DataService, private router:Router){

}
  ngOnInit(): void {
    
  }
  sendToService(title:string){
    this.data.inputData(title);
    // alert(title)
    
  }
  signOut(){
  this.api.signOut();
  this.router.navigate(['/login'])
  }
}
