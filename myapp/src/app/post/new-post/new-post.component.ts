import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { PostModel, addNewPostAction } from 'src/app/store/post.reducer';
import { myStoreState } from 'src/app/store/root-reducer';
import { Location } from '@angular/common';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss'],
})
export class NewPostComponent implements OnInit {
  myForm = this.fb.group({
    id: [0],
    userId: [1],
    title: ['', Validators.required],
    body: ['', Validators.required],
  });

  newPost: PostModel | undefined;

  constructor(
    private store: Store<myStoreState>,
    private fb: FormBuilder,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    let urlstate: any = this.location?.getState();
    let postObj: PostModel = urlstate.post;
    if (postObj) this.updateFormData(postObj);
  }

  updateFormData(postObj: PostModel) {
    this.myForm.patchValue({
      id: postObj.id,
      userId: postObj.userId,
      title: postObj.title,
      body: postObj.body,
    });
  }

  addPost() {
    let newPost: PostModel = {
      userId: this.myForm.value.userId || 1,
      title: this.myForm.value.title || '',
      body: this.myForm.value.body || '',
    };

    this.store.dispatch(addNewPostAction({ newPost: newPost }));

    this.router.navigate(['/post']);
  }

  previousState(): void {
    window.history.back();
  }
}
