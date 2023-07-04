import { Component, OnInit } from '@angular/core';
import { BookStore, getAuthorAndBookAction } from '../store/bookstore.reducer';
import { myStoreState } from '../store/root-reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  bookStore: BookStore = { author: {} };

  constructor(private store: Store<myStoreState>) {}

  ngOnInit(): void {
    this.store.dispatch(getAuthorAndBookAction());
    this.store.subscribe((state) => {
      this.bookStore = state.bookStore;
    });
  }
}
