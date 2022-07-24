import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  constructor(private api:ApiService) {
    api.viewTodos().subscribe(
      (response)=>{
        return this.data=response
      }
    )
   }
  data:any=[]

  ngOnInit(): void {
  }

}
