import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) {}
  viewProducts=()=>{
    return this.http.get("https://fakestoreapi.com/products")
  
}
  viewTodos=()=>{
    return this.http.get("https://jsonplaceholder.typicode.com/todos")
  }
  viewNews=()=>{
    return this.http.get("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=9b254d0873094b8bbd6926a25a6b3d76")
  }
  viewPosts=()=>{
    return this.http.get("https://jsonplaceholder.typicode.com/posts")
  }
  viewAlbums=()=>{
    return this.http.get("https://jsonplaceholder.typicode.com/albums")
  }
  viewPhotos=()=>{
    return this.http.get("https://jsonplaceholder.typicode.com/photos")
  }
  viewUsers=()=>{
    return this.http.get("https://jsonplaceholder.typicode.com/users")
  }
}
