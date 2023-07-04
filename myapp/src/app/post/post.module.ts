import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';
import { NewPostComponent } from './new-post/new-post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PostComponent, NewPostComponent],
  imports: [CommonModule, PostRoutingModule, FormsModule, ReactiveFormsModule],
})
export class PostModule {}
