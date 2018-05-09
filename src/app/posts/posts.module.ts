import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './containers/posts/posts.component';
import { ProfileComponent } from './containers/profile/profile.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostItemComponent } from './components/post-item/post-item.component';

@NgModule({
  imports: [
    CommonModule,
    PostsRoutingModule
  ],
  declarations: [PostsComponent, ProfileComponent, PostListComponent, PostItemComponent]
})
export class PostsModule { }
