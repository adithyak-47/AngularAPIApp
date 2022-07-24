import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor(private api:ApiService) {
    api.viewProducts().subscribe(
      (response)=>{
        this.data=response
      }
    )
   }
  data:any=[]

  ngOnInit(): void {
  }

}
