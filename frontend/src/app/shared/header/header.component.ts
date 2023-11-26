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
searchItem:any = ''
 
constructor(private api:ApiService,private data:DataService, private router:Router){

}
  ngOnInit(): void {
    
  }
  sendToService(title: string) {
    if (title.trim() !== '') {
      this.searchItem = title.trim();
      this.data.inputData(this.searchItem);
    } else {
      // If the input is empty, send an empty value to the service
      this.data.inputData('');
    }
  
    // Reset the input field after sending the value to the service
    this.searchItem = '';
  }
  signOut(){
  this.api.signOut();
  this.router.navigate(['/login'])
  }
}
