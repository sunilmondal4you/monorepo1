import { state } from '@angular/animations';
import { createAction, createReducer, on, props } from '@ngrx/store';

export interface PostModel {
  id?: number;
  userId?: number;
  title?: string;
  body?: string;
}

export interface PostStore {
  post?: PostModel;
  postList?: PostModel[];
  loading?: boolean;
}

export const getPostAction = createAction(
  'Get Post Action',
  props<{ id: number }>()
);
export const getPostSuccessAction = createAction(
  'Get Post Success Action',
  props<{ response: PostModel }>()
);

export const getPostListAction = createAction('Get Post List Action');
export const getPostListSuccessAction = createAction(
  'Get Post List Success Action',
  props<{ response: any }>()
);

export const addNewPostAction = createAction(
  'Add New Post Action',
  props<{ newPost: PostModel }>()
);
export const addNewPostPostSuccessAction = createAction(
  'Add New Post Success Action',
  props<{ response: any }>()
);

// Inititialization
export const initialState = { post: {}, postList: [] };

// Reducer with state and Action
export const postReducer = createReducer(
  initialState,

  on(getPostAction, (state, { id }) => {
    return { ...state, loading: true };
  }),

  on(getPostSuccessAction, (state, { response }) => {
    return { ...state, post: response, loading: false };
  }),

  on(getPostListAction, (state) => {
    return { ...state, loading: true };
  }),

  on(getPostListSuccessAction, (state, { response }) => {
    return { ...state, postList: response, loading: false };
  }),

  on(addNewPostAction, (state, { newPost }) => {
    return { ...state, loading: true };
  }),

  on(addNewPostPostSuccessAction, (state, { response }) => {
    let postList1 = [...state.postList] || [];
    let newPostList = [...postList1];
    newPostList = [...newPostList, response as never];
    return { ...state, postList: newPostList, loading: false };
  })
);
