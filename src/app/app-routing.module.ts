import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { NewsComponent } from './news/news.component';
import { PhotosComponent } from './photos/photos.component';
import { PostsComponent } from './posts/posts.component';
import { ShopComponent } from './shop/shop.component';
import { TodosComponent } from './todos/todos.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [{path:'',component:ShopComponent},{path:'todos',component:TodosComponent},{path:'news',component:NewsComponent},
{path:'posts',component:PostsComponent},{path:'albums',component:AlbumsComponent},{path:'photos',component:PhotosComponent},
{path:'users',component:UsersComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
