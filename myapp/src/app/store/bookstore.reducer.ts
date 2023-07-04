import { state } from '@angular/animations';
import { createAction, createReducer, on, props } from '@ngrx/store';

export interface Book {
  imageUrl?: string;
  title?: string;
  purchaseLink?: string;
  PublishDate?: string;
}

export interface Author {
  author?: string;
  birthday?: string;
  birthPlace?: string;
  books?: Book[];
}

export interface BookStore {
  author?: Author;
  loading?: boolean;
}

export const getAuthorAndBookAction = createAction(
  'Get Author and Book Action'
);

export const getAuthorAndBookSuccessAction = createAction(
  'Get Author and Book Success Action',
  props<{ response: any }>()
);

export const initialState: BookStore = { author: {} };

export const bookStoreReducer = createReducer(
  initialState,

  on(getAuthorAndBookAction, (state) => {
    return { ...state, loading: true };
  }),

  on(getAuthorAndBookSuccessAction, (state, { response }) => {
    return { ...state, author: response, loading: false };
  })
);
