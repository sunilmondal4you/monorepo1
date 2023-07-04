import { BookStoreEffects } from './bookstore.effects';
import { BookStore, bookStoreReducer } from './bookstore.reducer';
import { PostEffects } from './post.effects';
import { PostStore, postReducer } from './post.reducer';

export interface myStoreState {
  bookStore: BookStore;
  postStore: PostStore;
}

export const rootReducer = {
  bookStore: bookStoreReducer,
  postStore: postReducer,
};

export const rootEffects = [BookStoreEffects, PostEffects];
