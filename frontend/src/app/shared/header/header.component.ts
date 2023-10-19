import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


 
constructor(private api:ApiService, private router:Router){

}
  ngOnInit(): void {
    
  }

  signOut(){
  this.api.signOut();
  this.router.navigate(['/login'])
  }
}
